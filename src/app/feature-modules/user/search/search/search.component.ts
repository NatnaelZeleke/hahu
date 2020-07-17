import {Component, OnInit} from '@angular/core';
import {TagService} from '../../../../api/services/tag.service';
import {ITag} from '../../../../api/models/tag.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tags: ITag[];

  constructor(public tagService: TagService) {
  }

  ngOnInit() {
  }

  getTags() {
    this.tagService.query()
      .subscribe(result => {
        this.tags = result.body;
      });
  }

  getRecentlyOpened() {

  }

  getTrending() {

  }

  getLocal() {

  }

  getRecommendation() {

  }
}
