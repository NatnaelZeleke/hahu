import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationConfigurationService} from './authentication-configuration.service';
import {RolesService} from './roles.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationConfig: AuthenticationConfigurationService,
              private roleService: RolesService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(localStorage.getItem(this.authenticationConfig.roleKey));
    console.log(route.data['auth']);
    // console.log(route.data['auth2']);
    // if (route.data['auth'] == this.roleService.all) {
    //   return true;
    // }
    // check if the user is logged in
    if (localStorage.getItem(this.authenticationConfig.tokenKey)) {
      const roleKey = localStorage.getItem(this.authenticationConfig.roleKey);
      // if (roleKey === route.data['auth']) {
        return true;
      // } else {
      //   this.router.navigate(['/notauthorized']);
      //   return false;
      // }
    }
    // if the user is not logged in return false
    // delete all user route navigation
    this.router.navigate(['/login']);
    return false;
  }

  // canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   console.log(localStorage.getItem(this.authenticationConfig.roleKey));
  //   console.log(route.data['auth']);
  //   console.log(route.data['auth2']);
  //
  //   if (route.data['auth'] == this.roleService.all) {
  //     return true;
  //   }
  //   // check if the user is logged in
  //   if (localStorage.getItem(this.authenticationConfig.tokenKey)) {
  //     const roleKey = localStorage.getItem(this.authenticationConfig.roleKey);
  //     if (roleKey === route.data['auth']) {
  //       return true;
  //     } else {
  //       this.router.navigate(['/notauthorized']);
  //       return false;
  //     }
  //   }
  //   // if the user is not logged in return false
  //   this.router.navigate(['/login']);
  //   return false;
  // }

  // checkAdmin(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (localStorage.getItem(this.authenticationConfig.roleKey)) {
  //   }
  // }

}
