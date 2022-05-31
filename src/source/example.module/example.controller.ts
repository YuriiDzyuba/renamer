import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create.example.dto';
import { UpdateExampleDto } from './dto/update.example.dto';
import { ExamplePresenter } from './example.presenter';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  createExample,
  findAllExamples,
  findOneExample,
  updateExample,
  removeExample,
} from './consts/swagger.consts';

@ApiTags('Example module')
@Controller('example')
export class ExampleController {
  constructor(
    private readonly exampleService: ExampleService,
    private readonly examplePresenter: ExamplePresenter,
  ) {}

  @ApiOperation(createExample.apiOperation)
  @ApiResponse(createExample.apiResponse)
  @Post()
  async createExample(@Body() createExampleDto: CreateExampleDto) {
    const newExample = await this.exampleService.createExample(createExampleDto);
    return this.examplePresenter.mapExampleResponse(newExample);
  }

  @ApiOperation(findAllExamples.apiOperation)
  @ApiResponse(findAllExamples.apiResponse)
  @Get()
  async findAllExamples() {
    const foundedExamples = await this.exampleService.findAllExamples();
    return this.examplePresenter.mapMenuExampleResponse(foundedExamples);
  }

  @ApiOperation(findOneExample.apiOperation)
  @ApiResponse(findOneExample.apiResponse)
  @Get(':exampleId')
  async findOneExample(@Param('exampleId') exampleId: string) {
    const foundedExample = await this.exampleService.findOneExample(exampleId);
    return this.examplePresenter.mapExampleResponse(foundedExample);
  }

  @ApiOperation(updateExample.apiOperation)
  @ApiResponse(updateExample.apiResponse)
  @Patch(':exampleId')
  async updateExample(
    @Param('exampleId') exampleId: string,
    @Body() updateExampleDto: UpdateExampleDto,
  ) {
    const updatedExample = await this.exampleService.updateExample(
      exampleId,
      updateExampleDto,
    );
    return this.examplePresenter.mapExampleResponse(updatedExample);
  }

  @ApiOperation(removeExample.apiOperation)
  @ApiResponse(removeExample.apiResponse)
  @Delete(':exampleId')
  async removeExample(@Param('exampleId') exampleId: string) {
    const removedExample = await this.exampleService.removeExample(exampleId);
    return this.examplePresenter.mapExampleResponse(removedExample);
  }
}
