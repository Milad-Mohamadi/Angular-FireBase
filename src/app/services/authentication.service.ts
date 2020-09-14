import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signup(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async resetPassword(email: string) {
    await this.afAuth.sendPasswordResetEmail(email);
  }
}
