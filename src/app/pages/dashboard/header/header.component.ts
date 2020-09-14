import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  date: Date = new Date();
  user: any;

  constructor(public afAuth: AngularFireAuth) {}

  async ngOnInit() {
    this.user = await this.afAuth.currentUser;
  }
}
