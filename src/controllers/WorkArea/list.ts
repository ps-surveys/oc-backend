import { ResponseBody } from "../response-body";
import { Response } from "express";
import acsWorkplaceDao from "../../service/WorkAreaDao";

export class ResponseWorkplace extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listAcsWorkplace(req, res: Response, next) {
    acsWorkplaceDao.workplaces()
        .then(data => {
            res.send(new ResponseWorkplace(true, data, null));
        }, err => {
            res.status(500).send(new ResponseWorkplace(null, null, err));
        });
}

export function acsWorkplacessByIdComp(req, res: Response, next) {
    acsWorkplaceDao.workplacesByIdComp(req.params.id_comp)
        .then(data => {
            res.send(new ResponseWorkplace(true, data, null));
        }, err => {
            res.status(500).send(new ResponseWorkplace(null, null, err));
        });
}

