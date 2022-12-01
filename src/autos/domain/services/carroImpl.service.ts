import { Injectable } from '@nestjs/common';
// Importamos el modelo de jugador
import { Carro } from '../models/carro.model';
import {CarroService} from './carro.service';

@Injectable()
export class CarroServiceImpl implements CarroService {

  // Como no hay base de datos aun empleamos una variable en memoria:
  private carro: Carro[] = [{
    marca: 'BMW',
    modelo: 'm4',
    capacidad: 4, 
    team: 'camioneta'
  }]

  public listar() : Carro[] {
    return this.carro
  }

  public crear(automovil: Carro): Carro {
    this.carro.push(automovil);
    return automovil;
  }

  public modificar(id: number, automovil: Carro): Carro {
      this.carro[id] = automovil
      return this.carro[id];
  }

  public eliminar(id: number): boolean {
    const totalAutomovilesAntes = this.carro.length;
    this.carro = this.carro.filter((val, index) => index != id);
    if(totalAutomovilesAntes == this.carro.length){
      return false;
    }
    else{
      return true;
    }
  }

  public cambiarCapacidad(id: number, capa: number): Carro {
    this.carro[id].capacidad = capa;
    return this.carro[id];
  }

}
