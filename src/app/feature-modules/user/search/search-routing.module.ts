import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from '../user/user.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {
}
