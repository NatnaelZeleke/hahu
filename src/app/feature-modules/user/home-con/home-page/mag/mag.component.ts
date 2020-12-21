import {Component, OnInit} from '@angular/core';
import {ITag} from '../../../../../api/models/tag.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Account} from '../../../../../api/models/account.model';
import {Subscription} from 'rxjs';
import {HttpClient, HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import {SERVER_API_URL} from '../../../../../api/app.constants';
import {IPost} from '../../../../../api/models/post.model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {HashtagService} from '../../../../../services/hashtag.service';
import {PostService} from '../../../../../api/services/post.service';
import {AccService} from '../../../../../services/acc.service';
import {AppPostService} from '../../../../../services/app-post.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {PostMetaDataService} from '../../../../../api/services/post-meta-data.service';
import {TagsComponent} from '../content/tags/tags.component';
import * as moment from 'moment';

import {EditorChangeContent} from 'ngx-quill';
import {ContentType} from '../../../../../api/models/enumerations/content-type.model';
import {AddToExistingComponent} from './add-to-existing/add-to-existing.component';
import {CloseModalsService} from '../../../../../services/close-modals.service';
import {CreateMagComponent} from './create-mag/create-mag.component';


@Component({
  selector: 'app-mag',
  templateUrl: './mag.component.html',
  styleUrls: ['./mag.component.css']
})
export class MagComponent implements OnInit {

  submitted = false;
  public tags: ITag[] = [];
  captionForm: FormGroup;
  context = '';
  caption = '';
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
  base6dData: string;

  // current font class
  fontClass = 0;
  backGround = 'ww';
  showIcons = true;
  newPost: IPost;
  addToMag = false;
  caption2Form: FormGroup;
  content = new FormControl('');
  htmlValue: any;
  ref: BsModalRef;

  newMafRef: BsModalRef;



  constructor(public bsModalRef: BsModalRef,
              public modalService: BsModalService,
              public tagService: HashtagService,
              public formBuilder: FormBuilder,
              public httpClient: HttpClient,
              public postService: PostService,
              public accService: AccService,
              public appPostService: AppPostService,
              private spinner: NgxSpinnerService,
              public metaDataService: PostMetaDataService,
              public closeModals: CloseModalsService) {
  }

  ngOnInit() {
    // this.createNewMag();
    this.closeModals.closeLastSubject.subscribe(result => {
      if (result == true) {
        this.bsModalRef.hide();
      }
    });
    this.contentForm = this.formBuilder.group({
      newFile: ['', Validators.required]
    });
    this.accService.getUserAcc()
      .subscribe(result => {
        this.account = result;
      });
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
    this.caption2Form = this.formBuilder.group({
      content: ['', Validators.required]
    });
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

  createPost(f: any, isNew: boolean) {

    this.submitted = true;
    if (this.captionForm.valid) {

      // this.spinner.show('posting');
      this.newPost = {
        userId: this.account.id,
        postedDate: moment().startOf('second'),
        // featuredImage: f != null ? f.slice(23,) : null,
        // featuredImageContentType: 'image/jpeg',
        tags: this.tags,
        content: this.htmlValue,
        contentType: ContentType.HTML,
        title: this.captionForm.value.caption,
        postMetaData: [],
        pageId: 0,

      };
      console.log(this.newPost);

      if (isNew) {
        this.createNewMag(this.newPost);
      } else {
        this.addToExisting(this.newPost);
      }


      // this.postService.create(this.newPost)
      //   .subscribe(result3 => {
      //     this.appPostService.addPost(result3.body);
      //     this.tagService.resetTags();
      //     this.bsModalRef.hide();
      //   }, () => {
      //     this.spinner.hide('posting');
      //   });

    }

  }

  addToExisting(post: IPost) {
    const initialState = {
      title: 'add to existing',
      message: '',
      mag: post,
      account: this.account
    };
    this.ref = this.modalService.show(AddToExistingComponent, {
      initialState: initialState,
      animated: false,
      class: 'c-c-con',
      ignoreBackdropClick: true
    });
  }

  createNewMag(post: IPost) {
    const initialState = {
      title: '',
      message: '',
      mag: post
    };
    this.newMafRef = this.modalService.show(CreateMagComponent, {
      initialState: initialState,
      animated: false,
      ignoreBackdropClick: true
    });

    this.newMafRef.content.onClose
      .subscribe(result => {
        if (result) {
          this.bsModalRef.hide();
        }
      });
  }

  toggleAggToMag() {
    this.addToMag = !this.addToMag;
  }

  getDate() {
    return new Date();
  }

  get f() {
    return this.captionForm.controls;
  }

  changedEditor(event: EditorChangeContent) {
    this.htmlValue = event.html;
  }


}
