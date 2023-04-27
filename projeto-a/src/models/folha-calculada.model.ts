import { FolhaDTO } from './folha-dto.model';

export interface FolhaCalculada extends FolhaDTO {
  bruto: number;
  irrf: number;
  inss: number;
  fgts: number;
}
