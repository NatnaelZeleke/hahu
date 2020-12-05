import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {SharesService} from '../../../../../api/services/shares.service';
import {IShares} from '../../../../../api/models/shares.model';
import {IPost} from '../../../../../api/models/post.model';
import * as moment from 'moment';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.css']
})
export class ShareModalComponent implements OnInit {

  share: IShares;
  post: IPost;
  userId: number;
  title  = '';
  constructor(public bsModalRef: BsModalRef,
              public modalService: BsModalService,
              public shareService: SharesService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {

  }

  sharePost() {
    this.spinner.show('shareSpinner');
    this.share = {
      postId: this.post.id,
      registeredTime: moment().startOf('second'),
      userId: this.userId
    };
    this.shareService.create(this.share)
      .subscribe(result => {
        this.spinner.hide('shareSpinner');
        this.bsModalRef.hide();
      });
  }

}
