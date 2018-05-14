export interface IInstitutes {
    id: number;
    name: string;
    code: string;
}


export class Institutes {

    public id: number;
    public name: string;
    public code: string;

    constructor (obj: IInstitutes = {
        id: 0, name : '', code : ''
    }) {
        this.id =  obj.id;
        this.name =  obj.name;
        this.code =  obj.code;
    }
}
