import { Example } from '../types/example.type';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'examples' })
export class ExampleEntity implements Example {
  @ApiProperty({ examxple: '99f29076-b481-4ae6-916d-6cbc4c2fc2a9' })
  @PrimaryGeneratedColumn('uuid')
  exampleId: string;

  @ApiProperty({ description: 'some example', examxple: 'Example-Bank' })
  @Column()
  exampleName: string;

  @ApiProperty({ description: 'timestamp when entity has been created', exaxmple: new Date() })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'timestamp when entity has been updated', examxple: new Date() })
  @UpdateDateColumn()
  updatedAt: Date;
}
