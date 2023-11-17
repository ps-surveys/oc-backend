import { ActCondition } from './ActCondition';
export const TYPE_QUES = "Question";

export class ActQues {
    idQues:number;
    idSec:number; 
    idOpt?:number;
    nameQues: string;
    descQues: string;
    typeQues: string;
    infoQues: string;
    mandatoryQues: boolean;
    itemValue?:number;
    orderQues?:number;
}