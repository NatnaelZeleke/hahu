import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloseModalsService {

  closeMags = false;
  closeFirstSubject = new Subject<boolean>();
  closeLastSubject = new Subject<boolean>();


  constructor() {
  }

  closeFirst() {
    this.closeFirstSubject.next(true);
  }

  closeLast() {
    this.closeLastSubject.next(true);
  }
}
