import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/configs';

import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { ExampleRepository } from './example.repository';
import { ExamplePresenter } from './presenters/example.presenter';
import { ExampleMapper } from './example.mapper';
import { ExampleEntity } from './entities/example.entity';
import { IExampleRepositoryToken } from "./interfaces/exampleRepository.interface";
import { IExampleServiceToken } from "./interfaces/exampleService.interface";
import config from './configs/example.configs';


@Module({
  imports: [
      TypeOrmModule.forFeature([ExampleEntity]),
      ConfigModule.forFeature(config),
  ],
  controllers: [ExampleController],
  providers: [
      {
          provide: IExampleServiceToken,
          useClass: ExampleService,
      },
      {
          provide: IExampleRepositoryToken,
          useClass: ExampleRepository,
      },
      ExamplePresenter,
      ExampleMapper],
})
export class ExampleModule {}
