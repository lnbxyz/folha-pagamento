import { Body, Controller, Get, Post } from '@nestjs/common';
import { FolhaService } from './folha.service';
import { FolhaCalculada } from './dto/folha-calculada.dto';

@Controller({ path: 'folha' })
export class FolhaController {
  constructor(private readonly folhaService: FolhaService) {}

  @Get('listar')
  listar(): FolhaCalculada[] {
    return this.folhaService.listar();
  }

  @Post('registrar')
  registrar(@Body() folhas: FolhaCalculada[]): void {
    return this.folhaService.registrar(folhas);
  }
}
