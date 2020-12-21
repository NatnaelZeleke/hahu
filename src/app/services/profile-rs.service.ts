import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileRSService {

  selectedRoute = 0;
  selectedRouteSubject = new Subject<number>();

  constructor() {
  }

  changeSelected(idx: number) {
    this.selectedRoute = idx;
    this.selectedRouteSubject.next(this.selectedRoute);
  }
}
