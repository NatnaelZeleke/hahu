import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../api/services/account.service';
import {AccService} from '../../../services/acc.service';
import {Account} from '../../../api/models/account.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DashboardSrService} from '../../../services/dashboard-sr.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  account: Account;
  SWIPE_ACTION = {LEFT: 'swipeleft', RIGHT: 'swiperight'};
  currentIndex = 0;

  constructor(public accService: AccService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public dashBoardRS: DashboardSrService) {
  }

  ngOnInit() {

    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
      });

    this.dashBoardRS.selectedRouteSubject
      .subscribe(result => {
        this.currentIndex = result;
      });
  }

  swipeCalled(action: string) {

    if (action === this.SWIPE_ACTION.RIGHT) {
      if (this.currentIndex == 0) {
        console.log('do nothing return');
        return;
      } else {
        this.currentIndex = this.currentIndex - 1;
        this.routeToComponent();
        console.log('right swipe');
      }
    } else if (action === this.SWIPE_ACTION.LEFT) {
      if (this.currentIndex == 2) {
        console.log('do nothing left swipe');
        return;
      } else {
        this.currentIndex = this.currentIndex + 1;
        this.routeToComponent();
        console.log('left swipe');
      }
    }
  }

  routeToComponent() {

    if (this.currentIndex == 0) {
      this.dashBoardRS.changeSelected(0);
      this.router.navigate(['/user/user/homecon/dashboard/home'], {relativeTo: this.activatedRoute});

    } else if (this.currentIndex == 1) {
      this.dashBoardRS.changeSelected(1);
      this.router.navigate(['/user/user/homecon/dashboard/schoolfeed'], {relativeTo: this.activatedRoute});

    } else if (this.currentIndex == 2) {
      this.dashBoardRS.changeSelected(2);
      this.router.navigate(['/user/user/homecon/dashboard/saves'], {relativeTo: this.activatedRoute});
    }
  }


}
