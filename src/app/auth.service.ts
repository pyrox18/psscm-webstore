import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  loggedInUser: string = null;
  redirectUrl: string;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (password == "testPassword") {
      this.loggedInUser = username;
      return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }
    else {
      return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUser = null;
  }

}
