import { Module } from '@nestjs/common';
import { CarroControllerImpl } from './autos/adapters/controllers/autosImpl.controller';
import { CarroServiceImpl } from './autos/domain/services/carroImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [CarroControllerImpl],
  providers: [
    {
      provide: 'CarroService',
      useClass: CarroServiceImpl
    }    
  ],
})
export class AppModule {}
