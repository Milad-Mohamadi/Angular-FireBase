import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { MasterDashboardComponent } from './master/master-dashboard/master-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MasterDashboardComponent,
    children: [{ path: 'dictionary', component: DictionaryComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
