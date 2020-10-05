import { Component, OnInit } from '@angular/core';
import {DashboardSrService} from '../../../../services/dashboard-sr.service';

@Component({
  selector: 'app-schoolfeed',
  templateUrl: './schoolfeed.component.html',
  styleUrls: ['./schoolfeed.component.css']
})
export class SchoolfeedComponent implements OnInit {

  constructor(public dashBoardRS: DashboardSrService) { }

  ngOnInit() {
    // this.dashBoardRS.changeSelected(1);
  }

}
