export const TYPE_USER = "company_user";

export class AcsUser {
    idUser: number;
    idProf: number;
    idComp: number;
    identUser: string;
    nameUser: string;
    lastnameUser: string;
    emailUser: string;
    passUser?: string;
    genderUser: string;
    dateBirthUser: Date;
    entailmentDateUser: Date;
}