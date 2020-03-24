import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxModuleModule} from './ngx-module.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingComponent} from './component/loading/loading.component';
import {SpinnerComponent} from './component/spinner/spinner.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxModuleModule,
  ],
  declarations: [LoadingComponent, SpinnerComponent],
  exports: [NgxModuleModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    SpinnerComponent]
})
export class SharedModule {
}
