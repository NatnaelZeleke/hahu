import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontService {

  currentFont: string;
  currentFontSubject = new Subject<string>();

  constructor() {
  }

  changeFont(font: string) {
    this.currentFont = font;
    this.currentFontSubject.next(this.currentFont);
  }

  getCurrentFont(): string {
    return this.currentFont;
  }
}
