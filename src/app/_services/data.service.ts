import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Patients } from '../_models/patients';
import { Institutes } from '../_models/institutes';
import { Departments } from '../_models/departments';
import { Medications } from '../_models/medications';

@Injectable()
export class DataService {

    constructor(private router: Router) {  }


    /*************************************************/
    /*                                               */
    /*          PATIENT services                     */
    /*                                               */
    /*************************************************/

    getPatients(id?:number, id_institute?: number, id_department?: number) {

        let patients: Patients[] = [
          {'id' : 1,'id_department' : 1, 'firstName': 'Manuel' , 'lastName': 'López', 'patientNumber' : 123456, 'gender' : 'male', 'birthDate': '1971-10-14' },
          {'id' : 2,'id_department' : 1, 'firstName': 'Antonio', 'lastName': 'Gonzalez', 'patientNumber' : 123457, 'gender' : 'male', 'birthDate': '1960-10-14' },

          {'id' : 3,'id_department' : 2, 'firstName': 'María', 'lastName': 'Magdalena', 'patientNumber' : 123459, 'gender' : 'female', 'birthDate': '1981-10-14' },
          {'id' : 4,'id_department' : 2, 'firstName': 'Florentino', 'lastName': 'Pérez', 'patientNumber' : 123458, 'gender' : 'male', 'birthDate': '1961-10-14' },

          {'id' : 5,'id_department' : 3, 'firstName': 'John', 'lastName': 'Smith', 'patientNumber' : 133459, 'gender' : 'male', 'birthDate': '1951-10-14' },
          {'id' : 6,'id_department' : 4, 'firstName': 'Ana', 'lastName': 'Field', 'patientNumber' : 223458, 'gender' : 'male', 'birthDate': '1991-10-14' },
        ];

        if (id_department) {
          patients = patients.filter(
            pati => pati.id_department == id_department);
        }

        return patients;
    }


  /*************************************************/
  /*                                               */
  /*          INSTITUTE services                   */
  /*                                               */
  /*************************************************/
  getInstitutes(id?: number) {

    const institutes: Institutes[] = [
      {'id' : 1, 'name': 'Institute 1' , 'code': 'I1'},
      {'id' : 2, 'name': 'Institute 2' , 'code': 'I2'},
    ];

    return institutes;

  }

  /*************************************************/
  /*                                               */
  /*         DEPARTMENT services                   */
  /*                                               */
  /*************************************************/
  getDepartments(id_institute?: number) {

    let departments: Departments[] = [
      {'id' : 1, 'id_institute' : 1, 'name': 'Department 1' , 'code': 'D1'},
      {'id' : 2, 'id_institute' : 1, 'name': 'Department 2' , 'code': 'D2'},
      {'id' : 3, 'id_institute' : 2, 'name': 'Department 3' , 'code': 'D3'},
      {'id' : 4, 'id_institute' : 2, 'name': 'Department 4' , 'code': 'D4'},
    ];

    if (id_institute) {
      departments = departments.filter(
        dept => dept.id_institute == id_institute);
    }

    return departments;
  }

  /*************************************************/
  /*                                               */
  /*         MEDICATION services                   */
  /*                                               */
  /*************************************************/
  getMedications(id_patient?: number) {

    let medications: Medications[] = [
      {'id' : 1, 'id_patient' : 1, 'name': 'Medicine 1' , 'dosage': '1 ml', 'time': '8:00', 'remark': ''},
      {'id' : 2, 'id_patient' : 1, 'name': 'Medicine 2' , 'dosage': '1 ml', 'time': '21:00', 'remark': ''},

      {'id' : 3, 'id_patient' : 2, 'name': 'Medicine 1' , 'dosage': '5 ml', 'time': '8:00', 'remark': ''},
      {'id' : 4, 'id_patient' : 2, 'name': 'Medicine 2' , 'dosage': '5 ml', 'time': '14:00', 'remark': ''},
      {'id' : 5, 'id_patient' : 2, 'name': 'Medicine 3' , 'dosage': '5 ml', 'time': '21:00', 'remark': ''},

      {'id' : 6, 'id_patient' : 3, 'name': 'Medicine 4' , 'dosage': '1 ml', 'time': '8:00', 'remark': ''},
      {'id' : 7, 'id_patient' : 4, 'name': 'Medicine 5' , 'dosage': '1 ml', 'time': '21:00', 'remark': ''},

      {'id' : 8, 'id_patient' : 5, 'name': 'Medicine 6' , 'dosage': '1 ml', 'time': '9:00', 'remark': ''},
      {'id' : 9, 'id_patient' : 6, 'name': 'Medicine 7' , 'dosage': '1 ml', 'time': '15:00', 'remark': ''}
    ];

    if (id_patient) {
      medications = medications.filter(
        med => med.id_patient == id_patient);
    }

    return medications;
  }


}


