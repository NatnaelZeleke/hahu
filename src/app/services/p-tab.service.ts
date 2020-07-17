import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PTabService {

  public selected = 0;
  selectedSubject = new Subject<number>();

  constructor() {
  }

  changeTab(tab: number) {
    this.selected = tab;
    this.selectedSubject.next(this.selected);
    console.log('Tab' + tab);
  }

}
