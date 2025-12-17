import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Departamento } from './departamento.entity';

@Entity('EMPLEADOS')
export class Empleado {
  @PrimaryColumn({ name: 'EMPLEADO_ID' })
  empleadoId: number;

  @Column({ name: 'NOMBRE' })
  nombre: string;

  @Column({ name: 'APELLIDO' })
  apellido: string;

  @Column({ name: 'EMAIL' })
  email: string;

  @Column({ name: 'FECHA_CONTRATACION', nullable: true })
  fechaContratacion: Date;

  @Column({ name: 'SALARIO', type: 'decimal' })
  salario: number;

  @Column({ name: 'DEPARTAMENTO_ID', nullable: true })
  departamentoId: number;

  @Column({ name: 'ACTIVO', default: 'S' })
  activo: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.empleados)
  @JoinColumn({ name: 'DEPARTAMENTO_ID' })
  departamento: Departamento;
}