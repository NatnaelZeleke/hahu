import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotAuthorizedComponent} from './feature-modules/not-authorized/not-authorized.component';
import {PageNotFoundComponent} from './feature-modules/page-not-found/page-not-found.component';
import {HomeComponent} from './feature-modules/home/home.component';
import {RegisterComponent} from './feature-modules/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./feature-modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./feature-modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'notauthorized',
    component: NotAuthorizedComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
