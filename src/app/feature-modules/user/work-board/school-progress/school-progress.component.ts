import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-school-progress',
  templateUrl: './school-progress.component.html',
  styleUrls: ['./school-progress.component.css']
})
export class SchoolProgressComponent implements OnInit {

  constructor() {
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
  public barChartLabels = ['M', 'B', 'P', 'C', 'w', 'S', 'A'];
  public barChartType = 'bar';
  public barChartType2 = 'line';
  public barChartLegend = true;
  public barChartData = [{
    label: 'results',
    data: [10, 50, 60, 70, 80, 90, 90],
    backgroundColor: 'rgb(52, 151, 253)'

  }];

  ngOnInit() {
  }


}
