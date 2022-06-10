import { Injectable } from '@nestjs/common';
import { ExampleRepository } from './example.repository';
import { ExampleRepository } from './example.repository';
import { IExampleService } from "./interfaces/exampleService.interface";


@Injectable()
export class ExampleService implements IExampleService {
  constructor(private readonly exampleRepository: ExampleRepository) {}

  async createExample(createExampleDto: any): Promise<any> {
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

  async updateExample(exampleId: string, updateExample: any): Promise<any> {
    const updatedExample = await this.exampleRepository.updateExample(
        exampleId,
        updateExample,
    );
    return updatedExample;
  }

  async removeExample(exampleId: string): Promise<any> {
    await this.exampleRepository.removeExample(exampleId);
  }
}
