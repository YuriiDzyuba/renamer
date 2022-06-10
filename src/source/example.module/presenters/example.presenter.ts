import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamplePresenter {
  mapExampleResponse(example) {
    return { example };
  }

  mapMenuExampleResponse(examples) {
    return { examples };
  }
}
