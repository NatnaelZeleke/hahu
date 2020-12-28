import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SchoolfeedComponent} from './schoolfeed/schoolfeed.component';
import {SavesComponent} from './saves/saves.component';
import {ContentComponent} from './home-page/content/content.component';
import {TagsComponent} from './home-page/content/tags/tags.component';
import {MagComponent} from './home-page/mag/mag.component';
import {StoryComponent} from './story/story.component';
import {AddToExistingComponent} from './home-page/mag/add-to-existing/add-to-existing.component';
import {ChooseMagComponent} from './home-page/mag/choose-mag/choose-mag.component';
import {CreateMagComponent} from './home-page/mag/create-mag/create-mag.component';
import {ChooseFontComponent} from './home-page/content/choose-font/choose-font.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'schoolfeed',
        component: SchoolfeedComponent
      },
      {
        path: 'saves',
        component: SavesComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [
    ContentComponent,
    TagsComponent,
    MagComponent,
    StoryComponent,
    AddToExistingComponent,
    ChooseMagComponent,
    CreateMagComponent,
    ChooseFontComponent
  ]
})
export class HomeConRoutingModule {
}
