import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HashtagService} from '../../../../../../services/hashtag.service';
import {TagService} from '../../../../../../api/services/tag.service';
import {ITag} from '../../../../../../api/models/tag.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {


  tagForm: FormGroup;
  tags: ITag[] = [];
  tagList: ITag[] = [];

  constructor(public bsModalRef: BsModalRef,
              public modalService: BsModalService,
              public formBuilder: FormBuilder,
              public tagService: HashtagService,
              public tagsService: TagService,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {

    this.tagService.tagsSubject
      .subscribe(result => {
        this.tags = result;
      });
    this.tagService.getTags();
    this.tagForm = this.formBuilder.group(
      {
        tag: ['', Validators.required]
      }
    );

    this.getTagsList();
  }

  addTag(event) {
    event.preventDefault();

    // console.log(this.tagForm.value.tag);
    if (this.tagForm.valid) {
      this.createTag(this.tagForm.value.tag);
      // this.tagService.addTag(this.tagForm.value.tag);

    }
  }

  createTag(name: string) {
    this.spinner.show('tagSpinner');
    const nTag: ITag = {
      name: name
    };
    this.tagsService.create(nTag)
      .subscribe(result => {
        if (result.body != null) {
          this.tagService.addTag(result.body);
          this.spinner.hide('tagSpinner');
          this.tagForm.reset();
        }
      });
  }

  getTagsList() {
    this.tagsService.query({})
      .subscribe(result => {
        this.tagList = result.body;
      });
  }

  addTagFromList(idx: number) {
    this.tagService.addTag(this.tagList[idx]);
    this.tagList.splice(idx, 1);
  }

  removeTag(idx: number) {
    this.tagService.deleteTag(idx);
  }


}
