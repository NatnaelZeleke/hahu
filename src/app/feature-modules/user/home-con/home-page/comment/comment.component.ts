import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../../../../../api/models/comment.model';
import {ProfileService} from '../../../../../api/services/profile.service';
import {IProfile} from '../../../../../api/models/profile.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: IComment;
  profile: IProfile[];

  constructor(public profileService: ProfileService) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileService.query({
      page: 0,
      size: 1,
      'userId.equals': this.comment.userId
    })
      .subscribe(
        (response) => {
          this.profile = response.body;
        },
        () => {
        }
      );
  }


}
