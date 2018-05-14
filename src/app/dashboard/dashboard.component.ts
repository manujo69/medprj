import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Institutes } from '../_models/institutes';
import { Departments } from '../_models/departments';

import { DataService } from '../_services/data.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  title = 'MedicalAPP';

  id_institute = 0;
  id_department = 0;

  institutes: Institutes[] = [];
  departments: Departments[] = [];

  constructor(private _dataService: DataService, private _activatedRoute: ActivatedRoute) {}

  onInstituteChange() {

    this.id_department = 0;

    if (this.id_institute !== 0) {
      this.departments = this._dataService.getDepartments(this.id_institute);
    }
  }

  ngOnInit() {

    this.institutes = this._dataService.getInstitutes();
  }

}
