import { CreateExampleDto } from './dto/create.example.dto';
import { ExampleEntity } from './entities/example.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExampleMapper } from './example.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleRepository {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly example: Repository<ExampleEntity>,
    readonly exampleMapper: ExampleMapper,
  ) {}

  async createExample(exampleToSave: CreateExampleDto) {
    const newExample = await this.example.save(exampleToSave);
    return newExample ? this.exampleMapper.mapExampleEntityToExample(newExample) : null;
  }

  async findAllExamples() {
    const foundedExamples = await this.example.find();
    return foundedExamples
      ? this.exampleMapper.mapExampleEntitiesToExamples(foundedExamples)
      : [];
  }

  async findOneExample(exampleId: string) {
    const foundedExample = await this.example.findOne({ exampleId });
    return foundedExample
      ? this.exampleMapper.mapExampleEntityToExample(foundedExample)
      : null;
  }

  async updateExample(exampleId: string, fieldsToUpdate) {
    const { affected } = await this.example.update(
      { exampleId },
      {
        ...fieldsToUpdate,
      },
    );
    return !!affected;
  }

  async removeExample(exampleId: string): Promise<boolean> {
    const { affected } = await this.example.delete(exampleId);
    return !!affected;
  }
}
