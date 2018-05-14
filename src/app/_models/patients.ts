export interface IPatients {
    id: number;
    id_department: number;
    firstName: string;
    lastName: string;
    patientNumber: number;
    gender: string;
    birthDate: string;
}


export class Patients {

    public id: number;
    public id_department: number;
    public firstName: string;
    public lastName: string;
    public patientNumber: number;
    public gender: string;
    public birthDate: string;

    constructor (obj: IPatients = {
        id: 0, id_department: 0, firstName : '', lastName : '', patientNumber : 0, gender : 'male', birthDate: null
    }) {
        this.id =  obj.id;
        this.id_department =  obj.id_department;
        this.firstName =  obj.firstName;
        this.lastName =  obj.lastName;
        this.patientNumber =  obj.patientNumber;
        this.gender = obj.gender;
        this.birthDate = obj.birthDate;
    }
}
