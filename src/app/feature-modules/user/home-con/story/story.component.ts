import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
