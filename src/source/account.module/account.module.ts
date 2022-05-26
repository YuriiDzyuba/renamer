import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountRepository } from "./account.repository";
import { AccountPresenter } from "./account.presenter";
import { AccountMapper } from "./account.mapper";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountEntity } from "./entities/account.entity";
import { ConfigModule } from "@nestjs/config";
import config from "../../config/config";

@Module({

  imports: [
      TypeOrmModule.forFeature([AccountEntity]),
      ConfigModule.forRoot({envFilePath: '../env', load: [config]}),
  ],
  controllers: [AccountController],
  providers: [AccountService, AccountRepository, AccountPresenter, AccountMapper],
})
export class AccountModule {}
