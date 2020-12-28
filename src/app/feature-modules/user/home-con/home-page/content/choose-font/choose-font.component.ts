import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {FontService} from '../../../../../../services/font.service';

@Component({
  selector: 'app-choose-font',
  templateUrl: './choose-font.component.html',
  styleUrls: ['./choose-font.component.css']
})
export class ChooseFontComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef,
              public fontSerVice: FontService) {
  }

  ngOnInit() {
  }

  chooseFont(font: string) {
    this.fontSerVice.changeFont(font);
    this.bsModalRef.hide();
  }

}
