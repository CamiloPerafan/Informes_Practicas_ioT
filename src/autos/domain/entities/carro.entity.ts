import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('autos')
export class CarroEntity {
   @ObjectIdColumn()
   id: string;

   @Column()
   marca: string;

   @Column()
   modelo: string;

   @Column()
   capacidad: number;

   @Column()
   team: string;
}