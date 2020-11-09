import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormBuilder} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-choose-mag',
  templateUrl: './choose-mag.component.html',
  styleUrls: ['./choose-mag.component.css']
})
export class ChooseMagComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef,
              public modalService: BsModalService,
              public formBuilder: FormBuilder,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show('savingPostSpinner');
  }

}
