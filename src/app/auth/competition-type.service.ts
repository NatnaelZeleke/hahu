import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetitionTypeService {

  public ALL = null;
  public QA = 1;
  public CONTEST = 2;
}
