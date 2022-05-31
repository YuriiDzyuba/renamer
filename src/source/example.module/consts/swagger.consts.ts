import { ExampleEntity } from '../entities/example.entity';

export const createExample = {
  apiOperation: {
    summary: 'create new Example ',
  },
  apiResponse: {
    status: 201,
    description: 'created new Example',
    type: ExampleEntity,
  },
};

export const findAllExamples = {
  apiOperation: {
    summary: 'find many Example',
  },
  apiResponse: {
    status: 200,
    description: 'founded Example',
    type: ExampleEntity,
  },
};

export const findOneExample = {
  apiOperation: {
    summary: 'update current Example ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Example',
    type: ExampleEntity,
  },
};

export const updateExample = {
  apiOperation: {
    summary: 'update current Example ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Example',
    type: ExampleEntity,
  },
};

export const removeExample = {
  apiOperation: {
    summary: 'update current Example ',
  },
  apiResponse: {
    status: 200,
    description: 'updated Example',
    type: ExampleEntity,
  },
};
