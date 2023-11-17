import { ResponseBody } from "../response-body";
import { Response } from "express";
import actConditionDao from "../../service/QuestionDao";

export class ResponseCondition extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActConditions(req, res: Response, next) {
    actConditionDao.conditions()
        .then(data => {
            res.send(new ResponseCondition(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCondition(null, null, err));
        });
}

export function actConditionsByIdQues(req, res: Response, next) {
    actConditionDao.conditionsByIdQues(req.params.id_ques)
        .then(data => {
            res.send(new ResponseCondition(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCondition(null, null, err));
        });
}

