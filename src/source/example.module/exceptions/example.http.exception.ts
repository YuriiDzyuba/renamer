import { HttpException, HttpStatus } from '@nestjs/common';

export class ExampleExistsException extends HttpException {
    constructor(example) {
        super(`account ${example} exist`, HttpStatus.BAD_REQUEST);
    }
}