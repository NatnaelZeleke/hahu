import {Component, OnInit} from '@angular/core';
import {SchoolProgressService} from '../../../../api/services/school-progress.service';
import {AccService} from '../../../../services/acc.service';
import {Account} from '../../../../api/models/account.model';
import {ISchoolProgress} from '../../../../api/models/school-progress.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {AssesmentTypeService} from '../../../../api/services/assesment-type.service';
import {IAssesmentType} from '../../../../api/models/assesment-type.model';
import {Semester} from '../../../../api/models/enumerations/semester.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-school-progress',
  templateUrl: './school-progress.component.html',
  styleUrls: ['./school-progress.component.css']
})
export class SchoolProgressComponent implements OnInit {

  account: Account;
  assesments: IAssesmentType[] = [];
  semesters = Semester;
  dt = new Date();
  currentYear = this.dt.getFullYear().toString();
  progressFormGroup: FormGroup;
  acr = 0;
  showResult = false;
  currentAssessment: IAssesmentType = null;
  currentSemester: string = Semester.SEMESTER_I;

  constructor(public schoolProgress: SchoolProgressService,
              public accountService: AccService,
              public ngxSpinner: NgxSpinnerService,
              public assesmentService: AssesmentTypeService,
              public formBuilder: FormBuilder) {
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
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartType2 = 'line';
  public barChartLegend = true;
  public barChartData = [{
    label: 'results',
    data: [],
    backgroundColor: 'rgb(52, 151, 253)'

  }];

  ngOnInit() {
    // this.progressFormGroup = this.formBuilder.group(
    //   {
    //     assesment: ['', Validators.required],
    //     semester: [this.semesters.SEMESTER_I, Validators.required],
    //     year: [this.currentYear, Validators.required],
    //   }
    // );
    this.ngxSpinner.show('barChart');
    this.accountService.getUserAcc()
      .subscribe(result => {
        this.account = result;
        this.getFormValues();
      });
  }

  updateData() {
    this.ngxSpinner.show('barChart');
    // if (this.progressFormGroup.valid) {
      this.schoolProgress.query({
        'userId.equals': this.account.id,
        'assesmentTypeId.equals': this.currentAssessment.id,
        'semester.equals': this.currentSemester,
        'year.equals': this.currentYear
      }).subscribe(result => {
        this.filterResult(result.body);
        this.ngxSpinner.hide('barChart');
      });
    // }
  }


  filterResult(result: ISchoolProgress[]) {
    this.resetBarChart();
    for (let i = 0; i < result.length; i++) {
      this.barChartLabels.push(result[i].subjectName);
      this.barChartData[0].data.push(result[i].result);
    }
    this.calculateAverageResult(this.barChartData[0].data);
  }

  resetBarChart() {
    this.barChartLabels = [];
    this.barChartData[0].data = [];
  }

  getFormValues() {
    this.assesmentService.query()
      .subscribe(result => {
        this.assesments = result.body;
        this.currentAssessment = this.assesments[0];
        // this.progressFormGroup.patchValue({assesment: this.assesments[0].id});
        // console.log(this.progressFormGroup.value.assesment);
        this.updateData();
      });
  }

  calculateAverageResult(result: number[]) {
    for (let i = 0; i < result.length; i++) {
      this.acr = this.acr + result[i];
    }
    if (result.length > 0) {
      this.acr = this.acr / result.length;
    } else {
      this.acr = 0;
    }
    this.showResult = true;
  }


  changeAssessment(assessment: IAssesmentType) {
    this.currentAssessment = assessment;
    this.updateData();
  }

  changeSemester(semester: any) {
    // console.log(semester);
    this.currentSemester = semester.value;
    this.updateData();
  }

  changeYear(year: number) {
    this.currentYear = year.toString();
    this.updateData();
  }
}
