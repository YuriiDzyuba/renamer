import { Account } from '../../account.module/types/account.type';

export type Example = {
  exampleId: string;

  body: string;

  exampleAuthor: Account;

  likedBy: Account[];

  comments: Comment[];

  createdAt: Date;

  updatedAt: Date;
};
