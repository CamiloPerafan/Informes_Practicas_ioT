import {Carro } from '../../domain/models/carro.model';

export interface CarroController{

  listAutos();
  crear(datos:Carro);
  modificar(datos:Carro, id:number);
  eliminar(id:number);
  cambiarcapacidad(id: number, capacidad: number);
}