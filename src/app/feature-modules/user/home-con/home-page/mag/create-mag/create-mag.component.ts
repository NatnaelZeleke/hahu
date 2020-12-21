import {Component, OnInit} from '@angular/core';
import {IPost} from '../../../../../../api/models/post.model';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import {HttpEvent} from '@angular/common/http';
import {SERVER_API_URL} from '../../../../../../api/app.constants';
import {Account} from '../../../../../../api/models/account.model';
import {CloseModalsService} from '../../../../../../services/close-modals.service';
import {NgxSpinnerService} from 'ngx-spinner';
import * as moment from 'moment';
import {PostType} from '../../../../../../api/models/enumerations/post-type.model';
import {PostService} from '../../../../../../api/services/post.service';
import {AppPostService} from '../../../../../../services/app-post.service';
import {HashtagService} from '../../../../../../services/hashtag.service';

@Component({
  selector: 'app-create-mag',
  templateUrl: './create-mag.component.html',
  styleUrls: ['./create-mag.component.css']
})
export class CreateMagComponent implements OnInit {

  accept = '*';
  file: File;
  progress: number;
  hasBaseDropZoneOver = false;
  httpEmitter: Subscription;
  httpEvent: HttpEvent<{}>;
  lastFileAt: Date;
  sendableFormData: FormData; // populated via ngfFormData directive
  public resourceUrl = SERVER_API_URL + 'api/posts/custom';
  newfile: File;
  url: string;
  reader = new FileReader();
  contentForm: FormGroup;
  image: any;
  base6dData: string;

  mag: IPost;
  magContentForm: FormGroup;
  submitted = false;

  account: Account;
  public onClose: Subject<boolean>;

  newPost: IPost;
  title = '';

  constructor(public bsModalRef: BsModalRef,
              public formBuilder: FormBuilder,
              public closeModalService: CloseModalsService,
              private spinner: NgxSpinnerService,
              public postService: PostService,
              public appPostService: AppPostService,
              public tagService: HashtagService,) {
  }

  ngOnInit() {

    this.magContentForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
    this.contentForm = this.formBuilder.group({
      newFile: ['', Validators.required]
    });
    this.onClose = new Subject();
  }

  getDate() {
    return new Date();
  }

  createNewMag() {
    this.submitted = true;
    if (this.magContentForm.valid && this.file != null) {
      this.spinner.show('creatingNewMag');
      this.newPost = {
        userId: this.mag.userId,
        postedDate: moment().startOf('second'),
        featuredImage: this.file != null ? this.file.slice(23,) : null,
        featuredImageContentType: 'image/jpeg',
        postType: PostType.PAGE,
        postMetaData: [],
        title: this.magContentForm.value.title
      };

      this.postService.create(this.newPost)
        .subscribe(result => {
          this.mag.postType = PostType.POST;
          this.mag.pageId = result.body.id;
          this.postService.create(this.mag)
            .subscribe(result2 => {
              this.appPostService.addPost(result2.body);
              this.tagService.resetTags();
              this.bsModalRef.hide();
              this.onClose.next(true);

            });
        });


      console.log(this.newPost);

      // this.bsModalRef.hide();
      // this.onClose.next(true);

    }
  }

  get f() {
    return this.magContentForm.controls;
  }
}
