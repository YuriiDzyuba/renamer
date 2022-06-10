import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { ExampleRepository } from './example.repository';
import { ExamplePresenter } from './presenters/example.presenter';
import { ExampleMapper } from './example.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './entities/example.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleRepository, ExamplePresenter, ExampleMapper],
})
export class ExampleModule {}
