import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../_services/data.service';
import { ModalDirective } from 'ngx-bootstrap';

import { Medications } from '../_models/medications';
import { Patients } from '../_models/patients';

@Component({
  selector: 'medications-list',
  templateUrl: './medications-list.component.html',
  styleUrls: ['./medications.css']
})
export class MedicationsListComponent {
  title = 'MedicationsList';

  id:number = 0;
  remark:string = '';

  i_edited_remark:number = 0;

  medications: Medications[] = [];
  patient: Patients;

  @ViewChild('childModal') public childModal: ModalDirective;

  constructor(
        private _dataService: DataService,
        private _activatedRoute: ActivatedRoute,
        private _location: Location)
  {  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {

      if (typeof params['id'] !== 'undefined') {
        this.id = parseInt(params['id']);

        this.medications = this._dataService.getMedications(this.id);
        this.patient = this._dataService.getPatients(this.id)[0];
      }

     });
  }

  editRemark(i) {
    this.remark = this.medications[i].remark;
    this.i_edited_remark = i;

    this.childModal.show();
  }

  saveRemark(e) {

    this.medications[this.i_edited_remark].remark = e.target.form.elements.rmk.value;
    this.childModal.hide();
  }

  goBack() { this._location.back();}

}
