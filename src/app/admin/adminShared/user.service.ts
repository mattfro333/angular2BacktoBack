import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivateRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;

    constructor( private router: Router ) {
        firebase.initializeApp({
          apiKey: "AIzaSyDykS_g8v-MFXAxUbi7DpH1lY_U3tXEUTk",
          authDomain: "gigabytegames-bb2f7.firebaseapp.com",
          databaseURL: "https://gigabytesgames-bb2f7.firebaseapp.com",
          messagingSenderId: "434649479866"
        })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if (this.userLoggedIn) { return true; }

        this.router.navigate(['/admin/login']);
        return false;
    }
}
