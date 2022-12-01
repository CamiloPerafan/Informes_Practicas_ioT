import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { CarroService } from '../../domain/services/carro.service';

import {Carro} from '../../domain/models/carro.model';
import {CarroController} from './autos.controller';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class CarroControllerImpl implements CarroController {
  constructor(@Inject('CarroService') private readonly automovilService: CarroService) { }

  @Get()
  listAutos() {
    try{
      return this.automovilService.listar();
    }
    catch(e){
      return errReturn(e, "Error al listar automoviles");
    }
  }

  @UseGuards(JwtAuthGuard) //se adiciona esta anotacion para proteger el endpoint
  @Post()
  crear(@Body() datos: Carro) {
    try{
      return this.automovilService.crear(datos);
    }
    catch(e){
      return errReturn(e, "Error al crear automovil");
    }
  }

  @Put(":id")
  modificar(@Body() datos: Carro, @Param('id') id: number) {
    try{
      return this.automovilService.modificar(id, datos);
    }
    catch(e){
      return errReturn(e, "Error al modificar automovil");
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number) {
    try{
      return this.automovilService.eliminar(id);
    }
    catch(e){
      return errReturn(e, "Error al eliminar automovil");
    }
    
  }

  @Patch(":id/capacidad/:capacidad")
  cambiarcapacidad(@Param('id') id: number, @Param('capacidad') capacidad: number){
    try{
      return this.automovilService.cambiarCapacidad(id, capacidad);
    }
    catch(e){
      return errReturn(e, "Error al modificar edad del automovil");
    }
  }
}