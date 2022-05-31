import { Example } from '../types/example.type';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Account } from '../../account.module/types/account.type';
import { AccountEntity } from '../../account.module/entities/account.entity';
import { CommentEntity } from '../../comment.module/entities/comment.entity';

@Entity({ name: 'examples' })
export class ExampleEntity implements Example {
  @PrimaryGeneratedColumn('uuid')
  exampleId: string;

  @Column()
  body: string;

  @ManyToOne(() => AccountEntity)
  exampleAuthor: Account;

  @ManyToMany(() => CommentEntity)
  @JoinTable()
  comments: Comment[];

  @ManyToOne(() => AccountEntity)
  likedBy: Account[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
