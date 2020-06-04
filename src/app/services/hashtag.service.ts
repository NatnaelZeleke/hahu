import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ITag} from '../api/models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  public tags: ITag[] = [];
  public tagsSubject = new Subject<ITag[]>();

  constructor() {
  }

  getTags() {
    return this.tagsSubject.next(this.tags);
  }

  addTag(body: ITag) {
    this.tags.push(body);
    this.tagsSubject.next(this.tags);
  }

  deleteTag(idx: number) {
    this.tags.splice(idx, 1);
    this.tagsSubject.next(this.tags);
  }

  resetTags() {
    this.tags = [];
    this.tagsSubject.next(this.tags);
  }

}
