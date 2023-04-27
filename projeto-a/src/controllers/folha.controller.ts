import { FolhaRepository } from '../data/folha.repository';
import { FolhaDTO } from '../models/folha-dto.model';
import { Request, Response } from 'express';

const repository = new FolhaRepository();

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
      console.log(e)
      return response.status(422).json({
        message: 'Objeto de folha inválido',
        data: folhaRequest
      });
    }
  }

  async calcular(request: Request, response: Response) {
    // enviar para app b
  }
}
