import { IsString, IsNumber, IsEmail, IsOptional } from 'class-validator';

export class CreateEmpleadoDto {
  @IsNumber()
  empleadoId: number;

  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEmail()
  email: string;

  @IsNumber()
  salario: number;

  @IsNumber()
  @IsOptional()
  departamentoId?: number;
}