import { Carro } from "../models/carro.model";
import { InsertResult, UpdateResult } from 'typeorm';
import { CarroEntity } from '../entities/carro.entity';

export interface CarroService {

    listar(): Promise<CarroEntity[]>;
    crear(player: CarroEntity): Promise<InsertResult>;
    modificar(id: number, carroData: CarroEntity): Promise<UpdateResult>;
    eliminar(id: number): Promise<boolean>;
    cambiarCapacidad(id: number, capacidad: number): Promise<UpdateResult>;
}