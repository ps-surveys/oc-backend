import { ResponseBody } from "../response-body";
import { Response } from "express";
import actVerSectionDao from "../../service/VerSectionDao";

export class ResponseVerSec extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActVerSecByIdVer(req, res: Response, next) {
    actVerSectionDao.verSecByIdVer(req.params.id_ver)
        .then(data => {
            res.send(new ResponseVerSec(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVerSec(null, null, err));
        });
}

export function listActVerSecByIdVerInfoSec(req, res: Response, next) {
    actVerSectionDao.verSecByIdVerInfoSection(req.params.id_ver)
        .then(data => {
            res.send(new ResponseVerSec(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVerSec(null, null, err));
        });
}

export function listSectionNoVersion(req, res: Response, next) {
    actVerSectionDao.listSectionNoVersion(req.params.id_ver, req.params.id_form)
        .then(data => {
            res.send(new ResponseVerSec(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVerSec(null, null, err));
        });
}