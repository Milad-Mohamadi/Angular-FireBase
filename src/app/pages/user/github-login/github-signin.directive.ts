import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Directive({
  selector: '[appGitHubSignin]',
})
export class GitHubSigninDirective {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  @HostListener('click')
  onclick() {
    this.afAuth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(() => {
        this.router.navigateByUrl('dashboard/dictionary');
      });
  }
}
