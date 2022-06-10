import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './presenters/request.dto/create.example.dto';
import { UpdateExampleDto } from './presenters/request.dto/update.example.dto';
import { ExampleRepository } from './example.repository';

@Injectable()
export class ExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}
  async createExample(createExampleDto: CreateExampleDto): Promise<any> {
    const newExample = await this.exampleRepository.createExample(createExampleDto);
    return newExample;
  }

  async findAllExamples(): Promise<any> {
    const foundedExamples = await this.exampleRepository.findAllExamples();
    return foundedExamples;
  }

  async findOneExample(exampleId: string): Promise<any> {
    const foundedExample = await this.exampleRepository.findOneExample(exampleId);
    return foundedExample;
  }

  async updateExample(exampleId: string, updateExampleDto: UpdateExampleDto): Promise<any> {
    const updatedExample = await this.exampleRepository.updateExample(
      exampleId,
      updateExampleDto,
    );
    return updatedExample;
  }

  async removeExample(exampleId: string): Promise<any> {
    await this.exampleRepository.removeExample(exampleId);
  }
}
