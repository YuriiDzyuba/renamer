export interface IExampleService {
    createExample(createExample: any): Promise<any>;

    findAllExamples(): Promise<any>;

    findOneExample(exampleId: string): Promise<any>;

    updateExample(exampleId: string, updateExample: any): Promise<any>;

    removeExample(exampleId: string): Promise<any>;
}

export const IExampleServiceToken = Symbol('IExampleService');