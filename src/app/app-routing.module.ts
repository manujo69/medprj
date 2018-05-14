import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PatientsEditComponent } from './patients/patients-edit.component';
import { PatientsListComponent } from './patients/patients-list.component';

import { MedicationsEditComponent } from './medications/medications-edit.component';
import { MedicationsListComponent } from './medications/medications-list.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },

      { path: 'medications', component: MedicationsListComponent },
      { path: 'medication/:id', component: MedicationsEditComponent },

      { path: 'patients', component: PatientsListComponent },
      { path: 'patients/:id', component: PatientsEditComponent, },

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
