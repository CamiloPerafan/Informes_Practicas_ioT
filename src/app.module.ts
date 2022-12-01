import { Module } from '@nestjs/common';
import { CarroController } from './autos/adapters/controllers/autos.controller';
import { CarroService } from './autos/domain/services/carro.service';

@Module({
  imports: [],
  controllers: [CarroController],
  providers: [CarroService],
})
export class AppModule {}
