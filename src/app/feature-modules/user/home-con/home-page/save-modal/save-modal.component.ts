import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {IPreference} from '../../../../../api/models/preference.model';
import {PreferenceService} from '../../../../../api/services/preference.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.css']
})
export class SaveModalComponent implements OnInit {

  content: IPreference;

  constructor(public bsModalRef: BsModalRef,
              public modalService: BsModalService,
              public preferenceService: PreferenceService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    console.log('from modal');
    console.log(this.content);
    this.spinner.hide('savingPostSpinner');
  }


  savePost() {
    this.spinner.show('savingPostSpinner');
    this.preferenceService.update(this.content)
      .subscribe(result => {
        this.spinner.hide('savingPostSpinner');
        console.log('saved');

      });
    this.bsModalRef.hide();
  }

}
