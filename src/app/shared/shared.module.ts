import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxModuleModule} from './ngx-module.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingComponent} from './component/loading/loading.component';
import {SpinnerComponent} from './component/spinner/spinner.component';
import {ngfModule} from 'angular-file';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxModuleModule,
    ngfModule,
    NgxSpinnerModule
  ],
  declarations: [LoadingComponent, SpinnerComponent],
  exports: [NgxModuleModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    SpinnerComponent,
    ngfModule,
    NgxSpinnerModule]
})
export class SharedModule {
}
