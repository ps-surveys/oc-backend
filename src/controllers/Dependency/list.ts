import { ResponseBody } from "../response-body";
import { Response } from "express";
import actDependencyDao from "../../service/DependencyDao";

export class ResponseDependency extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActDependencies(req, res: Response, next) {
    actDependencyDao.dependencies()
        .then(data => {
            res.send(new ResponseDependency(true, data, null));
        }, err => {
            res.status(500).send(new ResponseDependency(null, null, err));
        });
}

export function actDependenciesByIdQues(req, res: Response, next) {
    actDependencyDao.dependenciesByIdQues(req.params.id_ques)
        .then(data => {
            res.send(new ResponseDependency(true, data, null));
        }, err => {
            res.status(500).send(new ResponseDependency(null, null, err));
        });
}

export function actDependenciesByIdSec(req, res: Response, next) {
    actDependencyDao.dependenciesByIdSec(req.params.id_sec)
        .then(data => {
            res.send(new ResponseDependency(true, data, null));
        }, err => {
            res.status(500).send(new ResponseDependency(null, null, err));
        });
}


export function loadQuestionDependency(req, res: Response, next) {
    actDependencyDao.loadQuestionDependency(req.params.id_ques, req.params.type)
        .then(data => {
            res.send(new ResponseDependency(true, data, null));
        }, err => {
            res.status(500).send(new ResponseDependency(null, null, err));
        });
}


