import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  isLoggedIn = false;
  constructor(private afAuth: AngularFireAuth) {}

  async ngOnInit(): Promise<void> {
    const user = await this.afAuth.currentUser;
    this.isLoggedIn = !!user;
  }
}
