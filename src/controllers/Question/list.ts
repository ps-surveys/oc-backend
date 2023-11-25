import { ResponseBody } from "../response-body";
import { Response } from "express";
import actQuesDao from "../../service/QuestionDao";

export class ResponseQuestion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActQues(req, res: Response, next) {
    actQuesDao.questions()
        .then(data => {
            res.send(new ResponseQuestion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseQuestion(null, null, err));
        });
}

export function actQuesByIdSecName(req, res: Response, next) {
    actQuesDao.quesByIdSecName(req.params.id_sec, req.params.name)
        .then(data => {
            res.send(new ResponseQuestion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseQuestion(null, null, err));
        });
}

export function actQuesByIdSec(req, res: Response, next) {
    actQuesDao.questionsByIdSec(req.params.id_sec)
        .then(data => {
            res.send(new ResponseQuestion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseQuestion(null, null, err));
        });
}

export function actQuesByIdSecFill(req, res: Response, next) {
    // actQuesDao.questionsByIdSecFill(req.params.id_sec, req.params.id_sv)
    
    actQuesDao.questionsByOrderQuest(req.params.id_sec, req.params.id_sv)
        .then(data => {
            res.send(new ResponseQuestion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseQuestion(null, null, err));
        });
}

export function actQuesByIdSecNotIn(req, res: Response, next) {
    actQuesDao.questionsByIdSecNotIn(req.params.id_sec_ni)
        .then(data => {
            res.send(new ResponseQuestion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseQuestion(null, null, err));
        });
}

export function actQuestionById(req, res: Response, next) {
    actQuesDao.questionById(req.params.id_ques)
        .then(data => {
            res.send(new ResponseQuestion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseQuestion(null, null, err));
        });
}

