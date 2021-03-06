import {
  ParseUUIDPipe,
  UsePipes,
  Controller,
  ValidationPipe,
  Get,
  Inject,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './presenters/request.dto/create.example.dto';
import { UpdateExampleDto } from './presenters/request.dto/update.example.dto';
import { ExamplePresenter } from './presenters/example.presenter';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  createExample,
  findAllExamples,
  findOneExample,
  updateExample,
  removeExample,
} from './consts/swagger.consts';
import { IExampleServiceToken } from "./interfaces/exampleService.interface";

@ApiTags('Example module')
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
@Controller('example')
export class ExampleController {
  constructor(
    @Inject(IExampleServiceToken)
    private exampleService: ExampleService,
    private readonly examplePresenter: ExamplePresenter,
  ) {}

  @ApiOperation(createExample.apiOperation)
  @ApiResponse(createExample.apiResponse)
  @Post()
  async createExample(
    @Body() createExampleDto: CreateExampleDto
  ): Promise<any> {
    const newExample = await this.exampleService.createExample(createExampleDto);
    return this.examplePresenter.mapExampleResponse(newExample);
  }

  @ApiOperation(findAllExamples.apiOperation)
  @ApiResponse(findAllExamples.apiResponse)
  @Get()
  async findAllExamples(): Promise<any> {
    const foundedExamples = await this.exampleService.findAllExamples();
    return this.examplePresenter.mapMenuExampleResponse(foundedExamples);
  }

  @ApiOperation(findOneExample.apiOperation)
  @ApiResponse(findOneExample.apiResponse)
  @Get(':exampleId')
  async findOneExample(
    @Param('exampleId', new ParseUUIDPipe()) exampleId: string
  ): Promise<any> {
    const foundedExample = await this.exampleService.findOneExample(exampleId);
    return this.examplePresenter.mapExampleResponse(foundedExample);
  }

  @ApiOperation(updateExample.apiOperation)
  @ApiResponse(updateExample.apiResponse)
  @Patch(':exampleId')
  async updateExample(
    @Param('exampleId', new ParseUUIDPipe()) exampleId: string,
    @Body() updateExampleDto: UpdateExampleDto,
  ): Promise<any> {
    const updatedExample = await this.exampleService.updateExample(
      exampleId,
      updateExampleDto,
    );
    return this.examplePresenter.mapExampleResponse(updatedExample);
  }

  @ApiOperation(removeExample.apiOperation)
  @ApiResponse(removeExample.apiResponse)
  @Delete(':exampleId')
  async removeExample(
    @Param('exampleId', new ParseUUIDPipe()) exampleId: string
  ): Promise<any> {
    const removedExample = await this.exampleService.removeExample(exampleId);
    return this.examplePresenter.mapExampleResponse(removedExample);
  }
}
