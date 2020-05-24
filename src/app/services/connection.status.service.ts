import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusService {

  IsConnected: boolean;
  constructor() { }

  getConnectionStatus() {
    return this.IsConnected;
  }

  setConnectionStatus(status: boolean) {
    this.IsConnected = status;
  }

}
