import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-master-login',
  templateUrl: './master-login.component.html',
  styleUrls: ['./master-login.component.scss'],
})
export class MasterLoginComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth) {}

  async ngOnInit(): Promise<void> {
  }
}
