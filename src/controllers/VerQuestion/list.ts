import { ResponseBody } from "../response-body";
import { Response } from "express";
import actVerQuestionDao from "../../service/VerQuestionDao";

export class ResponseVerQues extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActVerQuesByIdVer(req, res: Response, next) {
    actVerQuestionDao.verQuesByIdVer(req.params.id_ver)
        .then(data => {
            res.send(new ResponseVerQues(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVerQues(null, null, err));
        });
}


export function listActVerQuesByIdVerInfoSec(req, res: Response, next) {
    actVerQuestionDao.listActVerQuesByIdVerInfoSec(req.params.id_ver)
        .then(data => {
            res.send(new ResponseVerQues(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVerQues(null, null, err));
        });
}

export function listQuesNoVersion(req, res: Response, next) {
    actVerQuestionDao.listQuesNoVersion(req.params.id_ver, req.params.id_sec)
        .then(data => {
            res.send(new ResponseVerQues(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVerQues(null, null, err));
        });
}