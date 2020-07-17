import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {BsModalService} from 'ngx-bootstrap/modal';

import {Router} from '@angular/router';
import {ModalComponent} from '../shared/component/modal/modal.component';
import {AuthenticationService} from '../auth/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private modalService: BsModalService,
    private router: Router,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {


      if (err.status === 401) {
        // auto logout if 401 response returned from apiee
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      } else if (err.status === 403) {
        // this.openModal('Notice', err.error.message || err.statusText); /// authentication related error
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      } else if (err.status === 404) {
        // this.openModal('Notice', 'The application is not able to connect to services. Check if you are connected to internet');
      } else if (err.status >= 500 && err.status < 600) {

        // this.openModal('Notice', 'there is temporary problem. contact uni distribution support service or try latter');
      } else {
        const error = err.error.message || err.statusText;
        // this.openModalConnection('No Internet Connection.', 'Please check that you are connected to the internet and try again.');
      }
      return throwError(err.error.message || err.statusText);
    }));
  }

  openModal(title: string, message: string) {
    const initialState = {
      title: title,
      message: message,
      error: true
    };
    this.modalService.show(ModalComponent, {initialState});
  }

  openModalConnection(title: string, message: string) {
    const initialState = {
      title: title,
      message: message,
      connection: true
    };
    this.modalService.show(ModalComponent, {initialState});
  }

}
