import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './feature-modules/page-not-found/page-not-found.component';
import {NotAuthorizedComponent} from './feature-modules/not-authorized/not-authorized.component';
import {ModalComponent} from './shared/component/modal/modal.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './feature-modules/home/home.component';
import { RegisterComponent } from './feature-modules/register/register.component';
import {SharedModule} from './shared/shared.module';
import {JwtInterceptor} from './auth/jwt.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {LoaderInterceptorService} from './interceptors/loader-interceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccService} from './services/acc.service';
import {DashboardSrService} from './services/dashboard-sr.service';
import {SwingModule} from 'angular2-swing';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  };
}

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
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    AccService,
    DashboardSrService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {
}
