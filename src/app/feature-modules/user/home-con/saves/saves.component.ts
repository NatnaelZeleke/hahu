import { Component, OnInit } from '@angular/core';
import {DashboardSrService} from '../../../../services/dashboard-sr.service';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.css']
})
export class SavesComponent implements OnInit {

  constructor(public dashBoardRS: DashboardSrService) { }

  ngOnInit() {
     // this.dashBoardRS.changeSelected(2);
  }

}
