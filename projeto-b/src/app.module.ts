import { Module } from '@nestjs/common';
import { FolhaController } from './folha/folha.controller';
import { FolhaService } from './folha/folha.service';

@Module({
  imports: [],
  controllers: [FolhaController],
  providers: [FolhaService],
})
export class AppModule {}
