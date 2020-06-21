import {Component, OnInit} from '@angular/core';
import {SchoolProgressService} from '../../../../api/services/school-progress.service';
import {AccService} from '../../../../services/acc.service';
import {Account} from '../../../../api/models/account.model';
import {ISchoolProgress} from '../../../../api/models/school-progress.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-school-progress',
  templateUrl: './school-progress.component.html',
  styleUrls: ['./school-progress.component.css']
})
export class SchoolProgressComponent implements OnInit {

  account: Account;

  constructor(public schoolProgress: SchoolProgressService,
              public accountService: AccService,
              public ngxSpinner: NgxSpinnerService) {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartType2 = 'line';
  public barChartLegend = true;
  public barChartData = [{
    label: 'results',
    data: [],
    backgroundColor: 'rgb(52, 151, 253)'

  }];

  ngOnInit() {
    setTimeout(() => {
      this.ngxSpinner.show('barChart');
    }, 0);
    setTimeout(() => {
      this.ngxSpinner.show('graphChart');
    }, 0);

    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getSchoolProgress();
      });
  }

  getSchoolProgress() {

    this.schoolProgress.query({'userId.equals': this.account.id})
      .subscribe(result => {
        this.filterResult(result.body);
        this.ngxSpinner.hide('barChart');
        this.ngxSpinner.hide('graphChart');
      });
  }


  filterResult(result: ISchoolProgress[]) {
    for (let i = 0; i < result.length; i++) {
      this.barChartLabels.push(result[i].subjectName);
      this.barChartData[0].data.push(result[i].result);
    }
  }


  midChnage(event: any) {
    console.log(event);
  }
}
