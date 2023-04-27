import { PrismaClient } from "@prisma/client";
import { FolhaDTO } from "../models/folha-dto.model";

const prisma = new PrismaClient();

export class FolhaRepository {

  async cadastrar(folha: FolhaDTO): Promise<FolhaDTO> {
    await prisma.folha.create({
      data: {
        mes: folha.mes,
        ano: folha.ano,
        horas: folha.horas,
        valor: folha.valor,
        calculada: false,
        funcionario: JSON.stringify(folha.funcionario)
      },
    });
    return folha;
  }

}
