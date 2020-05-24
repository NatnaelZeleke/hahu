import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  bsInlineValue = new Date();
  bsConfig: Partial<BsDatepickerConfig>;
  constructor() { }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-default' });
  }

}
