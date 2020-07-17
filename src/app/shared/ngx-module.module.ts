import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {PopoverModule} from 'ngx-bootstrap/popover';
import {UiSwitchModule} from 'ngx-ui-switch';
@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    ProgressbarModule.forRoot(),
    PopoverModule.forRoot(),
    UiSwitchModule.forRoot({
      size: 'small',
      color: 'rgb(0, 189, 99)',
      switchColor: '#5be593',
      defaultBgColor: '#c9c9c9',
      defaultBoColor : '#2b2e3f',
      checkedLabel: 'on',
      uncheckedLabel: 'off'
    })

  ] ,
  exports: [
    BsDropdownModule,
    ButtonsModule,
    BsDatepickerModule,
    PaginationModule,
    AlertModule,
    ProgressbarModule,
    PopoverModule,
    UiSwitchModule
  ],
  declarations: []
})
export class NgxModuleModule {}
