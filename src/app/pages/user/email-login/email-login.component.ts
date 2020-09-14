import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  type: 'login' | 'signup' | 'reset' = 'login';
  loading = false;
  hide = true;
  serverMessage: string;

  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.maxLength(300)]],
      password: ['', [Validators.minLength(6), Validators.required]],
      passwordConfirm: ['', []],
    });
  }

  changeType(val) {
    this.type = val;
  }

  get isLogin() {
    return this.type === 'login';
  }

  get isSignup() {
    return this.type === 'signup';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    if (this.type !== 'signup') {
      return true;
    } else {
      return this.password.value === this.passwordConfirm.value;
    }
  }

  async submit() {
    this.loading = true;

    const email = this.email.value;
    const password = this.password.value;

    try {
      if (this.isLogin) {
        await this.authenticationService.login(email, password);
      }
      if (this.isSignup) {
        await this.authenticationService.signup(email, password);
      }
      if (this.isPasswordReset) {
        await this.authenticationService.resetPassword(email);
        this.serverMessage = 'Check your email';
      }
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }
}
