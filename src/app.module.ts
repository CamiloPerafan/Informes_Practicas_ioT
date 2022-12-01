import { Module } from '@nestjs/common';
import { CarroController } from './autos/adapters/controllers/autos.controller';
import { CarroService } from './autos/domain/services/carro.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [CarroController],
  providers: [CarroService],
})
export class AppModule {}
