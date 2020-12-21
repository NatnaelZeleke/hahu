import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormBuilder} from '@angular/forms';
import {ChooseMagComponent} from '../choose-mag/choose-mag.component';
import {IPost} from '../../../../../../api/models/post.model';
import {PostService} from '../../../../../../api/services/post.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {AppPostService} from '../../../../../../services/app-post.service';
import {CloseModalsService} from '../../../../../../services/close-modals.service';
import {MagContainerComponent} from '../../mag-container/mag-container.component';
import {Account} from '../../../../../../api/models/account.model';

@Component({
  selector: 'app-add-to-existing',
  templateUrl: './add-to-existing.component.html',
  styleUrls: ['./add-to-existing.component.css']
})
export class AddToExistingComponent implements OnInit {

  userId: number;
  pagesList: IPost[] = [];
  mag: IPost;
  ref: BsModalRef;
  account: Account;

  constructor(public bsModalRef: BsModalRef,
              public modalService: BsModalService,
              public formBuilder: FormBuilder,
              public postService: PostService,
              private spinner: NgxSpinnerService,
              public appPostService: AppPostService,
              public closeModals: CloseModalsService) {
  }

  ngOnInit() {
    this.getPages(this.userId);
    this.closeModals.closeFirstSubject.subscribe(result => {
      if (result == true) {
        this.bsModalRef.hide();
        this.closeModals.closeLast();
      }
    });
  }

  confirmMagSelection(idx: number) {
    const initialState = {
      title: 'confirm selection',
      message: '',
      magContainer: this.pagesList[idx],
      mag: this.mag
    };
    this.ref = this.modalService.show(ChooseMagComponent, {
      initialState: initialState,
      ignoreBackdropClick: true
    });

  }

  getPages(uId: number) {
    this.spinner.show('chooseMagSpinner');
    this.postService.query({
      'postType.equals': 'PAGE',
      'userId.equals': 3,
    }).subscribe(result => {
      this.pagesList = result.body;
      this.spinner.hide('chooseMagSpinner');
    });
  }

  showDetail(idx: number) {
    const initialState = {
      message: '',
      mag: this.pagesList[idx],
      account: this.account
    };
    this.modalService.show(MagContainerComponent, {class: 'mag-con-v', initialState: initialState});
  }
}
