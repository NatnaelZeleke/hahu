import {Injectable} from '@angular/core';
import {AccountService} from '../api/services/account.service';
import {Account} from '../api/models/account.model';
import {Observable, Subject} from 'rxjs';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccService {

  account: Account;
  accountSubject = new Subject<Account>();

  constructor(protected accountService: AccountService) {
  }


  // getUserAccount() {
  //   if (this.account != null) {
  //     this.accountSubject.next(this.account);
  //   } else {
  //     this.accountService.getAccount()
  //       .subscribe(result => {
  //         this.account = result;
  //         this.accountSubject.next(this.account);
  //         // this.loadPost();
  //       });
  //   }
  // }

  getUserAcc(): Observable<Account> {

    if (this.account != null) {
      return of(this.account);
    } else {
      // console.log('called the subscribe');
      return this.accountService.getAccount()
        .pipe(map(result => {
          this.account = result;
          return result;
        }));
    }
  }

}
