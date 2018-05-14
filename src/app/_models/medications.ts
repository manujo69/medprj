export interface IMedications {
    id: number;
    id_patient: number;
    name: string;
    dosage: string;
    time: string;
    remark: string;
}


export class Medications {

    public id: number;
    public id_patient: number;
    public name: string;
    public dosage: string;
    public time: string;
    public remark: string;

    constructor (obj: IMedications = {
        id: 0, id_patient: 0, name : '', dosage: '', time : '', remark : ''
    }) {
        this.id =  obj.id;
        this.id_patient =  obj.id_patient;
        this.name =  obj.name;
        this.dosage =  obj.dosage;
        this.time =  obj.time;
        this.remark = obj.remark;
    }
}
