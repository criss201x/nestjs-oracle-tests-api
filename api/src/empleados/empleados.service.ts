import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
  ) {}

  findAll(): Promise<Empleado[]> {
    return this.empleadoRepository.find({ relations: ['departamento'] });
  }

  async findOne(id: number): Promise<Empleado> {
    const empleado = await this.empleadoRepository.findOne({
      where: { empleadoId: id },
      relations: ['departamento'],
    });
    if (!empleado) {
      throw new NotFoundException(`Empleado con ID ${id} no encontrado`);
    }
    return empleado;
  }

  create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const empleado = this.empleadoRepository.create(createEmpleadoDto);
    return this.empleadoRepository.save(empleado);
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    await this.empleadoRepository.update({ empleadoId: id }, updateEmpleadoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.empleadoRepository.delete({ empleadoId: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Empleado con ID ${id} no encontrado`);
    }
  }
}