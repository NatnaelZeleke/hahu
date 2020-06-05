import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    ProgressbarModule.forRoot()
  ] ,
  exports: [
    BsDropdownModule,
    ButtonsModule,
    BsDatepickerModule,
    PaginationModule,
    AlertModule,
    ProgressbarModule
  ],
  declarations: []
})
export class NgxModuleModule {}
