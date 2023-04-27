import { Funcionario } from './funcionario.model';

export interface FolhaDTO {
  mes: number;
  ano: number;
  horas: number;
  valor: number;
  calculada: boolean;
  funcionario: Funcionario
}
