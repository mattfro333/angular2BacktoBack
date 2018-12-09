import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;

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

      register(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(function(error) {
            alert(`${error.message} Please Try Again`);
          });
}
        verifyUser() {
          this.authUser = firebase.auth().currentUser;
          if (this.authUser) {

              alert(`Welcome ${this.authUser.email}`);
              this.loggedInUser = this.authUser.email;
              this.userLoggedIn - true;
              this.router.navigate(['/admin']);
            }
          }

          login(loginEmail: string, loginPassword: string) {
            firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
              .catch(function(error) {
                  alert(`${error.message} Unable to login. Try again!`)
              })
          }

          logout() {
            this.userLoggedIn = false;
            firebase.auth().signout().then(function() {
                alert(`Logged Out!`);

            }, function(error) {
                  alert(`${error.message} Unable to login. Try again!`)
              })
          }
}
