import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../api/services/account.service';
import {AccService} from '../../../services/acc.service';
import {Account} from '../../../api/models/account.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  account: Account;

  constructor(public accService: AccService) {
  }

  ngOnInit() {

    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
      });
  }

}
