import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment} from '../../../api/models/comment.model';
import {IProfile} from '../../../api/models/profile.model';
import {ProfileService} from '../../../api/services/profile.service';
import {CommentService} from '../../../api/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() idx: number;
  @Input() comment: IComment;
  profile: IProfile[] = [];
  @Input() account: Account;
  showMoreButton = false;
  @Output('removeComment') removeComment = new EventEmitter<any>();

  constructor(public profileService: ProfileService,
              public commentService: CommentService) {
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
          this.shouldShowMoreButton();
        },
        () => {
        }
      );

  }

  shouldShowMoreButton() {
    if (this.comment.userId == +this.account.id) {
      this.showMoreButton = true;
    }
  }


  delete() {
    this.commentService.delete(this.comment.id)
      .subscribe(result => {

      });
    this.removeComment.emit(this.idx);
  }


}
