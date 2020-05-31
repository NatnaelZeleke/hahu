import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  public all = 'All';
  public STAFF = 'STAFF';
  public ADMIN = 'ADMIN';
  public SUPER_ADMIN = 'SUPERADMIN';
  constructor() { }
}
