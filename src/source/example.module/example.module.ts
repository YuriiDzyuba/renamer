import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { ExampleRepository } from './example.repository';
import { ExamplePresenter } from './presenters/example.presenter';
import { ExampleMapper } from './example.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/configs';
import { ExampleEntity } from './entities/example.entity';
import config from './configs/example.configs';

@Module({
  imports: [
      TypeOrmModule.forFeature([ExampleEntity]),
      ConfigModule.forFeature(config),
  ],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleRepository, ExamplePresenter, ExampleMapper],
})
export class ExampleModule {}
