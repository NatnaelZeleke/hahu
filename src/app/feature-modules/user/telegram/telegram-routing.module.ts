import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TelegramComponent} from './telegram/telegram.component';
const routes: Routes = [
  {
    path: 'telegram',
    component: TelegramComponent
  },
  {
    path: '',
    redirectTo: 'telegram',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelegramRoutingModule { }
