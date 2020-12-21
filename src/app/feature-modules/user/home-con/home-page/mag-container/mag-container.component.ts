import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../../../api/services/post.service';
import {IPost} from '../../../../../api/models/post.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Account} from '../../../../../api/models/account.model';

@Component({
  selector: 'app-mag-container',
  templateUrl: './mag-container.component.html',
  styleUrls: ['./mag-container.component.css']
})
export class MagContainerComponent implements OnInit {

  pageId: number;
  mag: IPost;
  magPosts: IPost[] = [];
  loaded = false;
  account: Account;
  constructor(public bsModalRef: BsModalRef,
              public postService: PostService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.getMagPosts();

  }

  getMagPosts() {
    this.spinner.show('magListSpinner');
    this.postService.query({
      'pageId.equals': this.mag.id,
    }).subscribe(result => {
      this.loaded = true;
      this.spinner.hide('magListSpinner');
      this.magPosts = result.body;
    });
  }

}
