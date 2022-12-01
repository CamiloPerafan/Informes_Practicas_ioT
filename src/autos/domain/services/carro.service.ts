import { Carro } from "../models/carro.model";

export interface CarroService {

    listar() : Carro[];
    crear(automovil: Carro): Carro;
    modificar(id: number, automovil: Carro): Carro;
    eliminar(id: number): boolean;
    cambiarCapacidad(id: number, capa: number): Carro;
}