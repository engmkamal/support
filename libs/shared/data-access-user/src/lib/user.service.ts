// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }
//========================================
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  private isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  private _userName = '';
  private _customerId = '';

  customerInfo = {};

  customersList = [
    {
      customerId: "1000",
      customerName: "Berger Paints Bangladesh Limited",
      customerAddress: "Bangladesh",
      customerEmail: "kamal@bergerbd.com",
      customerContact: "0191324255310",
      customerPassword: "demo"
    },
    {
      customerId: "2000",
      customerName: "JNBL",
      customerAddress: "Bangladesh",
      customerEmail: "kamal@jnbl.com",
      customerContact: "0191324255310",
      customerPassword: "demo"
    }
  ]

  checkCredentials(username: string, customerId:string, password: string) {
    this.customersList.forEach(c => {
      if (c.customerId === customerId && c.customerPassword === password) {
        this.isUserLoggedIn.next(true);
        this.customerInfo = c;
        this._userName = c.customerName;
      }
    });
    
  }

  logout() {
    this.isUserLoggedIn.next(false);
    this._userName = '';
  }

  public get userName(): string {
    return this._userName;
  }

  login(userName: string, customerId:string, password: string): void {
    this._userName = userName;
    this._customerId = customerId;
  }

}
