import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarroControllerImpl } from './autos/adapters/controllers/autosImpl.controller';
import { CarroServiceImpl } from './autos/domain/services/carroImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CarroEntity } from './autos/domain/entities/carro.entity';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'https://data.mongodb-api.com/app/data-nwdmk/endpoint/data/v1',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true, // Solo para desarrollo
      logging: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([CarroEntity])
  ],
  controllers: [CarroControllerImpl],
  providers: [
    {
      provide: 'CarroService',
      useClass: CarroServiceImpl
    }    
  ],
})
export class AppModule {}
