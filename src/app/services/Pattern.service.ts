import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatternService {
  public phonePattern = '^\\+251[0-9]{9}$';
  public emailPattern = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
  public vatPattern = '[0-9]{10}$';
  public tinPattern = '[0-9]{10}$';
  public onlyNumbers = '^(0|[1-9][0-9]*)$';
  constructor() { }
}
