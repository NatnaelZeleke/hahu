import {Injectable} from '@angular/core';
import {PostService} from '../api/services/post.service';
import {map} from 'rxjs/operators';
import {IPost} from '../api/models/post.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppPostService {

  posts: IPost[] = [];
  postsSubject = new Subject<IPost[]>();

  constructor(public postService: PostService) {
  }

  getPost(page: number, pagesize: number, query: any): Observable<IPost[]> {
    return this.postService.query(query)
      .pipe(map(result => {
        this.posts.push(...result.body);
        this.postsSubject.next(this.posts);
        return result.body;
      }));
  }

  addPost(post: IPost) {
    this.posts.splice(0, 0, post);
    this.postsSubject.next(this.posts);
  }
}
