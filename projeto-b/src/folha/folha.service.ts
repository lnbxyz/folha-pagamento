import { Injectable } from '@nestjs/common';
import { FolhaCalculada } from './dto/folha-calculada.dto';

@Injectable()
export class FolhaService {
  private folhas: FolhaCalculada[] = [];

  listar(): FolhaCalculada[] {
    return this.folhas.map((folha) => {
      return <FolhaCalculada>{
        ...folha,
        liquido: folha.bruto - folha.irrf - folha.inss,
      };
    });
  }

  registrar(folhas: FolhaCalculada[]): void {
    this.folhas = this.folhas.concat(folhas);
  }
}
