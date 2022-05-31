import { ExampleEntity } from './entities/example.entity';

export class ExampleMapper {
  mapExampleEntityToExample(example: ExampleEntity) {
    return {};
  }

  mapExampleEntitiesToExamples(examples: ExampleEntity[]) {
    return examples.map((example) => this.mapExampleEntityToExample(example));
  }
}
