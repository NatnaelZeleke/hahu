import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selected = 1;

  constructor() {
  }

  ngOnInit() {
  }

  changeMenu(id: number) {
    this.selected = id;
  }

  isSelected(id: number) {
    if (this.selected == id) {
      return true;
    }
    return false;
  }

}
