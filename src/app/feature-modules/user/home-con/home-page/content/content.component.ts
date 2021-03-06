import {Component, OnInit} from '@angular/core';
import {TagsComponent} from './tags/tags.component';
import {HashtagService} from '../../../../../services/hashtag.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
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
import {PostMetaDataService} from '../../../../../api/services/post-meta-data.service';
import {IPostMetaData} from '../../../../../api/models/post-meta-data.model';
import {map} from 'rxjs/operators';
import {FontService} from '../../../../../services/font.service';
import {ChooseFontComponent} from './choose-font/choose-font.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

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
  font = 'fo-ss';
  showIcons = true;
  newPost: IPost;
  addToMag = false;
  caption2Form: FormGroup;
  content = new FormControl('');


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
              public fontService: FontService) {
  }

  ngOnInit() {

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

    this.fontService.currentFontSubject
      .subscribe(result => {
        this.font = result;
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

  createPost(f: any) {

    if ((this.captionForm.value.caption != '') || (this.caption2Form.value.content != '')) {
      this.spinner.show('posting');
      this.newPost = {
        userId: this.account.id,
        postedDate: moment().startOf('second'),
        featuredImage: f != null ? f.slice(23,) : null,
        featuredImageContentType: 'image/jpeg',
        tags: this.tags,
        content: this.caption2Form.value.content,
        title: this.captionForm.value.caption,
        postMetaData: []
      };
      this.addMetaData('fontSize', 'fc' + this.fontClass.toString())
        .subscribe(result => {
          this.newPost.postMetaData.push(result);
          this.addMetaData('backGround', this.backGround)
            .subscribe(result2 => {
              this.newPost.postMetaData.push(result2);
              this.addMetaData('font', this.font)
                .subscribe(result3 => {
                  this.newPost.postMetaData.push(result3);
                  this.postService.create(this.newPost)
                    .subscribe(result4 => {
                      this.appPostService.addPost(result4.body);
                      this.tagService.resetTags();
                      this.bsModalRef.hide();
                    }, () => {
                      this.spinner.hide('posting');
                    });
                });
            });
        });
    }


  }

  addPostMetaData(postId: number) {
    this.addMetaData('fontSize', 'fc' + this.fontClass.toString())
      .subscribe(result => {
        this.addMetaData('backGround', this.backGround)
          .subscribe(result2 => {
            this.addMetaData('font', this.font)
              .subscribe(result3 => {
                this.spinner.hide('posting');
                this.tagService.resetTags();
                this.bsModalRef.hide();
              });
          });
      });
  }

  addMetaData(name: string, value: string): Observable<IPostMetaData> {
    const body: IPostMetaData = {
      name: name,
      value: value
    };
    return this.metaDataService.create(body)
      .pipe(map(result => {
        return result.body;
      }));
  }

  changeListener(event: Event): void {
  }

  onFileInputChange(event: Event): void {
    const eventTarget: HTMLInputElement = event.target as HTMLInputElement;
    const file: File = eventTarget.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.base6dData = (fileReader.result as string).substr((fileReader.result as string).indexOf('base64,') + 'base64,'.length);
      // console.log(base64Datanew);
      // this.editForm.patchValue({
      //   image: base64Data,
      //   imageContentType: file.type
      // });
    };
  }

  changeClass() {
    if (this.fontClass == 3) {
      this.fontClass = 0;
    } else {
      this.fontClass = this.fontClass + 1;
    }
  }

  changeBackground(bgClass: string) {
    this.backGround = bgClass;
  }

  toggleAggToMag() {
    this.addToMag = !this.addToMag;
  }


  getDate() {
    return new Date();
  }

  toggleIcons() {
    this.showIcons = !this.showIcons;
  }

  onLongPress() {
    const initialState = {
      title: 'Choose Font',
      backdrop: true,
      message: '',
    };
    this.modalService.show(ChooseFontComponent, {
      initialState: initialState,
      animated: false,
      class: 'font-m',
    });
  }

}
