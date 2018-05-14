export interface IDepartments {
    id: number;
    id_institute: number;
    name: string;
    code: string;
}

export class Departments {

    public id: number;
    public id_institute: number;
    public name: string;
    public code: string;

    constructor (obj: IDepartments = {
        id: 0, id_institute: 0, name : '', code : ''
    }) {
        this.id =  obj.id;
        this.id_institute =  obj.id_institute;
        this.name =  obj.name;
        this.code =  obj.code;
    }
}
