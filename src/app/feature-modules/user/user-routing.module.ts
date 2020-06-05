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
        loadChildren: () => import('./home-con/home-con.module').then(m => m.HomeConModule),
      }, {
        path: 'workboard',
        loadChildren: () => import('./work-board/work-board.module').then(m => m.WorkBoardModule),
      }, {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
      }, {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
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
