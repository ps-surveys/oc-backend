import { ResponseBody } from "../response-body";
import { Response } from "express";
import actVersionDao from "../../service/SurveyVersionDao";

export class ResponseVersion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActVersionByIdForm(req, res: Response, next) { 
    actVersionDao.versionsByIdForm(req.params.id_form)
        .then(data => {
            res.send(new ResponseVersion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVersion(null, null, err));
        });
}

export function actVersionById(req, res: Response, next) { 
    actVersionDao.versionById(req.params.id_ver)
        .then(data => {
            res.send(new ResponseVersion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVersion(null, null, err));
        });
}