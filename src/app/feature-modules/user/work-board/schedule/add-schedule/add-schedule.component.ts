import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppScheduleService} from '../../../../../services/app-schedule.service';
import {ISchedule} from '../../../../../api/models/schedule.model';
import {Account} from '../../../../../api/models/account.model';
import * as moment from 'moment';
import {NgxSpinnerService} from 'ngx-spinner';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  scheduleForm: FormGroup;
  submitted = false;
  account: Account;
  minDate: Date;
  title = '';
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(public bsModalRef: BsModalRef,
              public formBuilder: FormBuilder,
              public scheduleService: AppScheduleService,
              public spinner: NgxSpinnerService) {
  }

  ngOnInit() {

    this.scheduleForm = this.formBuilder.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.bsConfig = Object.assign({}, {containerClass: 'theme-dark-blue'});

  }


  register() {
    this.submitted = true;
    if (this.scheduleForm.valid) {
      this.spinner.show('addSchedule');
      const sch: ISchedule = {
        title: this.scheduleForm.value.title,
        userId: this.account.id,
        startTime: moment(new Date(this.scheduleForm.value.startDate)),
        endTime: moment(new Date(this.scheduleForm.value.endDate))
      };

      this.scheduleService.addSchedule(sch)
        .subscribe(result => {
          this.spinner.hide('addSchedule');
          this.bsModalRef.hide();
        }, (err) => {
          this.spinner.hide('addSchedule');
        });
    }
  }

  get f() {
    return this.scheduleForm.controls;
  }

}
