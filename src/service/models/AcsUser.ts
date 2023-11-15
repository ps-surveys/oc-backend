export const TYPE_USER = "user";

export class AcsUser {
    idUser: number;
    idProf: number;
    idComp: number;
    identUser: string;
    nameUser: string;
    lastnameUser: string;
    emailUser: string;
    passUser?: string;
    rhUser: string;
    genderUser: string;
    dateBirthUser: Date;
    entailmentDateUser: Date;
}