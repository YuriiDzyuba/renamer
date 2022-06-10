import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Example } from '../../types/example.type';

export class CreateExampleDto implements Pick<Example, 'exampleId'| 'exampleName'> {

    @ApiProperty({ examdple: '123e4567-e89b-12d3-a456-426614174000.', description: 'example - should be unique' })
    exampleId:string;

    @ApiProperty({ exsample: 'pol14', description: 'nicName - should be unique' })
    @MinLength(2)
    @MaxLength(22)
    @IsNotEmpty()
    exampleName:string;
}
