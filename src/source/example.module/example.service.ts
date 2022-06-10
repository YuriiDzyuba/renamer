import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './presenters/request.dto/create.example.dto';
import { UpdateExampleDto } from './presenters/request.dto/update.example.dto';
import { ExampleRepository } from './example.repository';

@Injectable()
export class ExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}
  async createExample(createExampleDto: CreateExampleDto) {
    const newExample = await this.exampleRepository.createExample(createExampleDto);
    return newExample;
  }

  async findAllExamples() {
    const foundedExamples = await this.exampleRepository.findAllExamples();
    return foundedExamples;
  }

  async findOneExample(exampleId: string) {
    const foundedExample = await this.exampleRepository.findOneExample(exampleId);
    return foundedExample;
  }

  async updateExample(exampleId: string, updateExampleDto: UpdateExampleDto) {
    const updatedExample = await this.exampleRepository.updateExample(
      exampleId,
      updateExampleDto,
    );
    return updatedExample;
  }

  async removeExample(exampleId: string) {
    await this.exampleRepository.removeExample(exampleId);
  }
}
