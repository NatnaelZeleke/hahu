import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DashboardSrService} from '../../../../services/dashboard-sr.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalComponent} from '../../../../shared/component/modal/modal.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {StoryComponent} from '../story/story.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selected = 0;
  @ViewChild('scrollContent', {read: ElementRef, static: false}) public scrollContent: ElementRef<any>;
  SWIPE_ACTION = {LEFT: 'swipeleft', RIGHT: 'swiperight', UP: 'swipeup', DOWN: 'swipedown'};
  currentIndex = 0;

  constructor(public dashBoardRS: DashboardSrService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public modalService: BsModalService) {
  }

  ngOnInit() {
    this.dashBoardRS.selectedRouteSubject
      .subscribe(result => {
        this.selected = result;
        // change position
        this.changePosition(this.selected);
      });

    this.dashBoardRS.selectedRouteSubject
      .subscribe(result => {
        this.currentIndex = result;
      });
    this.openStory();
  }

  changeMenu(id: number) {
    this.selected = id;
    this.dashBoardRS.changeSelected(this.selected);
    this.changePosition(this.selected);
  }

  // isSelected(id: number) {
  //   if (this.selected == id) {
  //     return true;
  //   }
  //   return false;
  // }

  changePosition(position: number) {
    if (position == 0) {
      this.scrollContent.nativeElement.scrollLeft = 0;
    } else if (position == 1) {
      this.scrollContent.nativeElement.scrollLeft = this.scrollContent.nativeElement.scrollLeft / 2;
    } else if (position == 2) {
      this.scrollContent.nativeElement.scrollLeft = 150;
    }
  }

  swipeCalled(action: string) {

    if (action === this.SWIPE_ACTION.RIGHT) {
      if (this.currentIndex == 0) {
        console.log('do nothing return');
        this.openStory();
        return;
      } else {
        this.currentIndex = this.currentIndex - 1;
        this.routeToComponent();
        console.log('right swipe');
      }
    } else if (action === this.SWIPE_ACTION.LEFT) {
      if (this.currentIndex == 2) {
        console.log('do nothing left swipe');
        return;
      } else {
        this.currentIndex = this.currentIndex + 1;
        this.routeToComponent();
        console.log('left swipe');
      }
    } else if (action === this.SWIPE_ACTION.UP) {
      return;
    } else if (action === this.SWIPE_ACTION.DOWN) {
      return;
    }
  }

  routeToComponent() {
    if (this.currentIndex == 0) {
      this.dashBoardRS.changeSelected(0);
      this.router.navigate(['/user/user/homecon/dashboard/home'], {relativeTo: this.activatedRoute});

    } else if (this.currentIndex == 1) {
      this.dashBoardRS.changeSelected(1);
      this.router.navigate(['/user/user/homecon/dashboard/schoolfeed'], {relativeTo: this.activatedRoute});

    } else if (this.currentIndex == 2) {
      this.dashBoardRS.changeSelected(2);
      this.router.navigate(['/user/user/homecon/dashboard/saves'], {relativeTo: this.activatedRoute});
    }
  }

  openStory() {
    const initialState = {
      title: '',
      message: '',
    };
    this.modalService.show(StoryComponent, {
      initialState: initialState,
      class: 'st-modal'
    });
  }
}
