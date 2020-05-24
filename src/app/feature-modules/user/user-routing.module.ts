import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'homecon',
        loadChildren: './home-con/home-con.module#HomeConModule',
      }, {
        path: 'workboard',
        loadChildren: './work-board/work-board.module#WorkBoardModule',
      }, {
        path: 'search',
        loadChildren: './search/search.module#SearchModule',
      }, {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
      },
      {
        path: '',
        redirectTo: 'homecon',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
