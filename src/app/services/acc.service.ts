import {Injectable} from '@angular/core';
import {AccountService} from '../api/services/account.service';
import {Account} from '../api/models/account.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccService {

  account: Account;
  accountSubject = new Subject<Account>();

  constructor(protected accountService: AccountService) {
  }


  getUserAccount() {
    this.accountService.getAccount()
      .subscribe(result => {
        this.account = result;
        this.accountSubject.next(this.account);
        // this.loadPost();
      });
  }


}
