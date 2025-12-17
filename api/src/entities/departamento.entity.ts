import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Empleado } from './empleado.entity';

@Entity('DEPARTAMENTOS')
export class Departamento {
  @PrimaryColumn({ name: 'DEPARTAMENTO_ID' })
  departamentoId: number;

  @Column({ name: 'NOMBRE_DEPARTAMENTO' })
  nombreDepartamento: string;

  @Column({ name: 'UBICACION', nullable: true })
  ubicacion: string;

  @Column({ name: 'PRESUPUESTO', type: 'decimal', nullable: true })
  presupuesto: number;

  @Column({ name: 'FECHA_CREACION', nullable: true })
  fechaCreacion: Date;

  @OneToMany(() => Empleado, (empleado) => empleado.departamento)
  empleados: Empleado[];
}