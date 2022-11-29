import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

interface Auto {

  marca: string,
  modelo: string,
  capacidad: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  private Autos : Auto[] = [{
    marca: "BWM",
    modelo: "M4",
    capacidad: 2
  }]

  @Get()
  getHello(): Auto[] {
    return this.Autos;
  }

  @Post()
  crear(@Body() datos: Auto): Auto {
    this.Autos.push(datos);
    return datos;
  }

  @Put(":id")
  modificar(@Body() datos: Auto, @Param('id') id: number): Auto | string {
    try{
    this.Autos[id] = datos
    return this.Autos[id];
    }
    catch{
      return `No fue posible modificar el automovil en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.Autos = this.Autos.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  @Patch(":id/capacidad/:capacidad")
  cambiarcapacidad(@Param('id') id: number, @Param('capacidad') capacidad: number): Auto | string{
    try{
      this.Autos[id].capacidad = capacidad;
      return this.Autos[id];
    }
    catch{
      return `No fue posible modificar el automovil en la posición ${id}`
    }
  }
}