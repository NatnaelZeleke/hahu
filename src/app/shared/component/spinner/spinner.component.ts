import { Component, OnInit } from '@angular/core';
// import {LoaderService} from '../../../interceptors/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  show = false;
  constructor() { }

  ngOnInit() {
    // this.loaderService.loaderState
    //   .subscribe((result) => {
    //     this.show = result.show;
    //   });
  }
}
