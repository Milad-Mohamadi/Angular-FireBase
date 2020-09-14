import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { MaterialModule } from 'src/app/subModules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterDashboardComponent } from './master/master-dashboard/master-dashboard.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { HeaderComponent } from './header/header.component';
import { GreetingPipe } from 'src/app/pipes/greeting.pipe';
import { SafeBgUrlPipe } from 'src/app/pipes/safe-bg-url.pipe';

@NgModule({
  declarations: [
    DictionaryComponent,
    MasterDashboardComponent,
    HeaderComponent,
    GreetingPipe,
    SafeBgUrlPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent, GreetingPipe, SafeBgUrlPipe],
})
export class DashboardModule {}
