import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelegramRoutingModule} from './telegram-routing.module';
import {TelegramComponent} from './telegram/telegram.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [TelegramComponent],
  imports: [
    CommonModule,
    TelegramRoutingModule,
    SharedModule
  ]
})
export class TelegramModule {
}
