import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxModuleModule} from './ngx-module.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingComponent} from './component/loading/loading.component';
import {SpinnerComponent} from './component/spinner/spinner.component';
import {ngfModule} from 'angular-file';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartsModule} from 'ng2-charts';

import {QuillModule} from 'ngx-quill';
import {SwingModule} from 'angular2-swing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxModuleModule,
    ngfModule,
    NgxSpinnerModule,
    ChartsModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

                       // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

           // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          // ['clean'],                                         // remove formatting button

          ['link', 'image', 'video']                         // link and image, video
        ]
      },
    }),
    SwingModule
  ],
  declarations: [LoadingComponent, SpinnerComponent],
  exports: [NgxModuleModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    SpinnerComponent,
    ngfModule,
    NgxSpinnerModule,
    ChartsModule,
    QuillModule,
    SwingModule
  ]
})
export class SharedModule {
}
