import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormBuilder} from '@angular/forms';
import {ChooseMagComponent} from '../choose-mag/choose-mag.component';

@Component({
  selector: 'app-add-to-existing',
  templateUrl: './add-to-existing.component.html',
  styleUrls: ['./add-to-existing.component.css']
})
export class AddToExistingComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef,
              public modalService: BsModalService,
              public formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  confirmMagSelection() {
    const initialState = {
      title: 'confirm selection',
      message: '',
    };
    this.modalService.show(ChooseMagComponent, {
      initialState: initialState
    });
  }
}
