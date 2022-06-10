import { Example } from '../types/example.type';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'examples' })
export class ExampleEntity implements Example {
  @PrimaryGeneratedColumn('uuid')
  exampleId: string;

  @Column()
  exampleName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
