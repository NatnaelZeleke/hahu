import {Component, OnInit} from '@angular/core';
import {TagsComponent} from './tags/tags.component';
import {HashtagService} from '../../../../../services/hashtag.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import {PostService} from '../../../../../api/services/post.service';
import {AccService} from '../../../../../services/acc.service';
import {Account} from '../../../../../api/models/account.model';
import {IPost} from '../../../../../api/models/post.model';
import * as moment from 'moment';
import {SERVER_API_URL} from '../../../../../api/app.constants';
import {ITag} from '../../../../../api/models/tag.model';
import {AppPostService} from '../../../../../services/app-post.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public tags: ITag[] = [];
  captionForm: FormGroup;
  context = '';
  caption  = '';
  account: Account;
  // this is for uploading image
  // this is for image uploading
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

  constructor(public bsModalRef: BsModalRef,
              public modalService: BsModalService,
              public tagService: HashtagService,
              public formBuilder: FormBuilder,
              public httpClient: HttpClient,
              public postService: PostService,
              public accService: AccService,
              public appPostService: AppPostService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {

    this.contentForm = this.formBuilder.group({
      newFile: ['', Validators.required]
    });
    this.accService.accountSubject
      .subscribe(result => {
        this.account = result;
      });
    this.accService.getUserAccount();

    this.tagService.tagsSubject
      .subscribe(result => {
        this.tags = result;
      });
    this.tagService.getTags();
    this.captionForm = this.formBuilder.group(
      {
        caption: ['', Validators.required]
      }
    );

  }

  addTags() {
    const initialState = {
      title: 'add tags',
      message: '',
    };
    this.modalService.show(TagsComponent, {
      initialState: initialState,
      animated: false,
      class: 'c-c-con',
    });
  }

  uploadFiles(files: File[]) {
    console.log(files);

    const req = new HttpRequest<FormData>(
      'POST',
      this.resourceUrl,
      this.sendableFormData,
      {
        reportProgress: true// , responseType: 'text'
      });
    this.httpEmitter = this.httpClient.request(req)
      .subscribe(
        event => {
          this.httpEvent = event;

          if (event instanceof HttpResponse) {
            delete this.httpEmitter;
            console.log('request done', event);

          }
        },
        error => console.log('Error Uploading', error)
      );
  }

  createPost(f: any) {
    this.spinner.show('posting');
    const post: IPost = {
      userId: this.account.id,
      title: this.captionForm.value.caption,
      postedDate: moment().startOf('second'),
      featuredImage: f.slice(23,),
      featuredImageContentType: 'image/jpeg',
      tags: this.tags
    };
    this.postService.create(post)
      .subscribe(result => {
        this.appPostService.addPost(result.body);
        this.spinner.hide('posting');
        this.tagService.resetTags();
        this.bsModalRef.hide();

        // console.log(result);
      });
  }

  changeListener(event: Event): void {
  }


  getDate() {
    return new Date();
  }


}
