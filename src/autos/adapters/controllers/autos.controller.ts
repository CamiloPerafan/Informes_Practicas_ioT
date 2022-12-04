import { CarroEntity } from 'src/autos/domain/entities/carro.entity';
import {Carro } from '../../domain/models/carro.model';

export interface CarroController{

  listAutos();
  crear(datos:CarroEntity);
  modificar(datos:CarroEntity, id:number);
  eliminar(id:number);
  cambiarcapacidad(id: number, capacidad: number);
}