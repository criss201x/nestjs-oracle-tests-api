import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { EmpleadosModule } from './empleados/empleados.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'oracle',
        host: configService.get<string>('DB_HOST', 'oracle-db'),
        port: configService.get<number>('DB_PORT', 1521),
        sid: configService.get<string>('DB_SID', 'XE'),
        username: configService.get<string>('DB_USER', 'system'),
        password: configService.get<string>('DB_PASSWORD', 'OraclePass123'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
    }),
    EmpleadosModule,
    DepartamentosModule,
  ],
})
export class AppModule {}