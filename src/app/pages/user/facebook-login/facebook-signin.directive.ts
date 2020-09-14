import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Directive({
  selector: '[appFacebookSignin]',
})
export class FacebookSigninDirective {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  @HostListener('click')
  onclick() {
    this.afAuth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(() => {
        this.router.navigateByUrl('dashboard/dictionary');
      });
  }
}
