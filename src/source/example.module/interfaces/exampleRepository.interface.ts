export interface IExampleRepository {
    createExample(exampleToSave: any): Promise<any>;

    findAllExamples(): Promise<any>;

    findOneExample(exampleId: string): Promise<any>;

    updateExample(exampleId: string, fieldsToUpdate): Promise<any>;

    removeExample(exampleId: string): Promise<boolean>;
}

export const IExampleRepositoryToken = Symbol('IExampleRepository');