import {Component, OnInit} from '@angular/core';
import {DashboardSrService} from '../../../../services/dashboard-sr.service';
import {SchoolFeedService} from '../../../../api/services/school-feed.service';
import {ISchoolFeed} from '../../../../api/models/school-feed.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {Account} from '../../../../api/models/account.model';
import {AccService} from '../../../../services/acc.service';

@Component({
  selector: 'app-schoolfeed',
  templateUrl: './schoolfeed.component.html',
  styleUrls: ['./schoolfeed.component.css']
})
export class SchoolfeedComponent implements OnInit {

  schoolFeed: ISchoolFeed[] = [];
  account: Account;
  constructor(public dashBoardRS: DashboardSrService,
              public schoolFeedS: SchoolFeedService,
              private spinner: NgxSpinnerService,
              protected accService: AccService,) {
  }

  ngOnInit() {
    // this.dashBoardRS.changeSelected(1);
    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getSchoolFeed();
      });

  }


  getSchoolFeed() {
    this.spinner.show('schoolFeedSpinner');
    this.schoolFeedS.query()
      .subscribe(result => {
        this.spinner.hide('schoolFeedSpinner');
        this.schoolFeed = result.body;
      });
  }

}
