import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../../api/services/post.service';
import {IPost} from '../../../../api/models/post.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  postList: IPost[];

  constructor(protected postService: PostService) {
  }

  ngOnInit() {
    this.loadPost();
  }


  loadPost() {
    this.postService.query(
      {
        page: 0,
        size: 10
      }
    ).subscribe((result) => {
        this.postList = result.body;
      },
      (err) => {
        // TODO handle post scroll errors, things like connection and database errors
      });
  }

}
