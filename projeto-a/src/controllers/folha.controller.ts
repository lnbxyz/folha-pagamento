import { CalculoService } from './../service/calculo.service';
import { FolhaRepository } from '../data/folha.repository';
import { FolhaDTO } from '../models/folha-dto.model';
import { Request, Response } from 'express';
import axios from 'axios';
import { FolhaCalculada } from '../models/folha-calculada.model';

const repository = new FolhaRepository();
const service = new CalculoService();

export class FolhaController {
  async cadastrar(request: Request, response: Response) {
    let folhaRequest: FolhaDTO = request.body;

    if (!folhaRequest) {
      return response.status(400).json({
        message: 'Folha deve ser enviada para cadastro'
      });
    }

    try {
      let folha = await repository.cadastrar(folhaRequest);

      return response.status(201).json({
        message: 'Folha cadastrada',
        data: folha
      });
    } catch (e) {
      console.log(e);
      return response.status(422).json({
        message: 'Objeto de folha inválido',
        data: folhaRequest
      });
    }
  }

  async calcular(request: Request, response: Response) {
    try {
      let folhas = await repository.getNaoCalculados();

      folhas.forEach(async folha => {
        await repository.atualizarParaCalculada(folha.id);
      });

      let body: FolhaCalculada[] = folhas.map(folha => {
        let bruto = service.getSalarioBruto(
          folha.horas,
          folha.valor.toNumber()
        );
        return {
          mes: folha.mes,
          ano: folha.ano,
          horas: folha.horas,
          valor: folha.valor.toNumber(),
          calculada: true,
          funcionario: JSON.parse(folha.funcionario),
          bruto,
          irrf: service.getValorIR(bruto),
          inss: service.getValorINSS(bruto),
          fgts: service.getValorFGTS(bruto)
        };
      });

      await axios
        .post(`http://localhost:3001/folha/registrar`, body)
        .then(resposta => {
          return response.status(200).json({
            message: 'Folhas calculadas com sucesso'
          });
        })
        .catch(erro => {
          return response.status(400).json({
            message: erro.response.data.message
          });
        });
    } catch (e) {
      console.log(e);
      return response.status(500);
    }
  }
}
