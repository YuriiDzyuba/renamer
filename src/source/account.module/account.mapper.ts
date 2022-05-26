import { AccountEntity } from "./entities/account.entity";

export class AccountMapper {
  mapAccountEntityToAccount(account: AccountEntity) {
    return {};
  }

  mapAccountEntitiesToAccounts(accounts: AccountEntity[]) {
    return accounts.map((account) => this.mapAccountEntityToAccount(account));
  }
}
