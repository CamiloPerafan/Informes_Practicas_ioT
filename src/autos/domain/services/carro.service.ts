import { Injectable } from '@nestjs/common';
// Importamos el modelo de jugador
import { Carro } from '../models/carro.model';

@Injectable()
export class CarroService {

  // Como no hay base de datos aun empleamos una variable en memoria:
  private carro: Carro[] = [{
    marca: 'BMW',
    modelo: 'm4',
    capacidad: 4, 
    team: 'camioneta'
  }]

  /**
  * Método para obtener todos los jugadores
  */
  public listar() : Carro[] {
    return this.carro
  }

  /**
      * Método para crear un jugador
      */
  public crear(automovil: Carro): Carro {
    this.carro.push(automovil);
    return automovil;
  }

  /**
  * Método para modificar un jugador
  */
  public modificar(id: number, automovil: Carro): Carro {
      this.carro[id] = automovil
      return this.carro[id];
  }

  /**
      * Método para eliminar un jugador
      * Debido a que usamos un filtro, para validar si se elimina el jugador, 
      * primero se determina cuantos elementos hay en el arreglo y luego se hace una comparación.
      */
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

  /**
  * Método para modificar la edad de un jugador
  */
  public cambiarCapacidad(id: number, capa: number): Carro {
    this.carro[id].capacidad = capa;
    return this.carro[id];
  }

}
