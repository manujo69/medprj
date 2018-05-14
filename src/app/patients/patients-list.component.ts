import { Component, Input } from '@angular/core';

import { Patients } from '../_models/patients';
import { DataService } from '../_services/data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients.css']
})
export class PatientsListComponent {

  title = 'PatientsList';

  patients: Patients[] = [];

  institute_id = 0;
  department_id = 0;

  @Input() instituteID: number = 0;
  @Input() departmentID: number = 0;

  constructor(private _dataService: DataService, private _router: Router) {

  }

  public refreshList() {
      this.patients = this._dataService.getPatients(0, this.instituteID, this.departmentID);
  }

  public onSelectPatient(i) {
    this._router.navigate(['/medications', {'id': this.patients[i].id}]);
  }

  ngOnInit(): void {
    this.refreshList();
  }

  ngOnChanges() {
    this.refreshList();
  }

}
