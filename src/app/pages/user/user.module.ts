import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './email-login/email-login.component';
import { MaterialModule } from 'src/app/subModules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GitHubSigninDirective } from './github-login/github-signin.directive';
import { MasterLoginComponent } from './master/master-login.component';
import { GoogleSigninDirective } from './google-login/google-signin.directive';
import { FacebookSigninDirective } from './facebook-login/facebook-signin.directive';

@NgModule({
  declarations: [
    LoginComponent,
    MasterLoginComponent,
    GitHubSigninDirective,
    GoogleSigninDirective,
    FacebookSigninDirective,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    GitHubSigninDirective,
    GoogleSigninDirective,
    FacebookSigninDirective,
  ],
})
export class UserModule {}
