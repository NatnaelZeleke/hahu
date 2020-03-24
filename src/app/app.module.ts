import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './feature-modules/page-not-found/page-not-found.component';
import {NotAuthorizedComponent} from './feature-modules/not-authorized/not-authorized.component';
import {ModalComponent} from './shared/component/modal/modal.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './feature-modules/home/home.component';
import { RegisterComponent } from './feature-modules/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NotAuthorizedComponent,
    ModalComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
