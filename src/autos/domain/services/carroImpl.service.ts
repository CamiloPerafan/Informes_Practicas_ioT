import { Injectable } from '@nestjs/common';
// Importamos el modelo de jugador
import { Carro } from '../models/carro.model';
import {CarroService} from './carro.service';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
import { CarroEntity } from '../entities/carro.entity';

@Injectable()
export class CarroServiceImpl implements CarroService { 

  constructor(
   @InjectRepository(CarroEntity)
   private repository: MongoRepository<CarroEntity>,
  ) {}

  public async listar(): Promise<CarroEntity[]> {
    return await this.repository.find();
  }

  public async crear(carroData: CarroEntity): Promise<InsertResult> {
    const newCarro = await this.repository.insert(carroData);
    return newCarro;
  }

  public async modificar(
    id: number,
    carroData: CarroEntity,
  ): Promise<UpdateResult> {
    const updatedCarro = await this.repository.update(id, carroData);
    return updatedCarro
  }

  public async eliminar(id: number): Promise<boolean> {
    const deleteResult = await this.repository.delete(id);
    return deleteResult.affected > 0;
  }

  public async cambiarCapacidad(id: number, capa: number): Promise<UpdateResult> {
    const updatedCarro = await this.repository.update(id, { capacidad: capa });
    return updatedCarro;
  }
}