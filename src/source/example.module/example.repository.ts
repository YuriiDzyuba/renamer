import { ExampleEntity} from './entities/example.entity';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { ExampleMapper} from './example.mapper';
import { Injectable} from '@nestjs/common';
import { IExampleRepository} from "./interfaces/exampleRepository.interface";



@Injectable()
export class ExampleRepository implements IExampleRepository {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly example: Repository<ExampleEntity>,
    readonly exampleMapper: ExampleMapper,
  ) {}

  async createExample(exampleToSave: any): Promise<any> {
    const newExample = await this.example.save(exampleToSave);
    return newExample ? this.exampleMapper.mapExampleEntityToExample(newExample) : null;
  }

  async findAllExamples(): Promise<any> {
    const foundedExamples = await this.example.find();
    return foundedExamples
        ? this.exampleMapper.mapExampleEntitiesToExamples(foundedExamples)
        : [];
  }

  async findOneExample(exampleId: string): Promise<any> {
    const foundedExample = await this.example.findOne({exampleId});
    return foundedExample
        ? this.exampleMapper.mapExampleEntityToExample(foundedExample)
        : null;
  }

  async updateExample(exampleId: string, fieldsToUpdate): Promise<any> {
    const {affected} = await this.example.update(
        {exampleId},
        {
          ...fieldsToUpdate,
        },
    );
    return !!affected;
  }

  async removeExample(exampleId: string): Promise<boolean> {
    const {affected} = await this.example.delete(exampleId);
    return !!affected;
  }
}
