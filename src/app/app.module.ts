import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './_services/data.service';

import { AppComponent } from './app.component';

import { DashboardComponent} from './dashboard/dashboard.component';

import { MedicationsEditComponent} from './medications/medications-edit.component';
import { MedicationsListComponent} from './medications/medications-list.component';

import { PatientsEditComponent} from './patients/patients-edit.component';
import { PatientsListComponent} from './patients/patients-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MedicationsEditComponent,
    MedicationsListComponent,
    PatientsEditComponent,
    PatientsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
