import { ResponseBody } from "../response-body";
import { Response } from "express";
import acsPermisRolDao from "../../service/AcsPermisRolDao";

export class ResponsePermisRol extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listAcsPermissionsRol(req, res: Response, next) {
    acsPermisRolDao.permissionsRol()
        .then(data => {
            res.send(new ResponsePermisRol(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermisRol(null, null, err));
        });
}

export function acsPermissionsRolByIdProf(req, res: Response, next) {
    acsPermisRolDao.permissionsRolByIdProf(req.params.id_role)
        .then(data => {
            res.send(new ResponsePermisRol(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermisRol(null, null, err));
        });
}

export function acsPermissionsRolByIdProfPermis(req, res: Response, next) {
    acsPermisRolDao.permissionsRolByIdProfPermis(req.params.id_role, req.params.id_permis)
        .then(data => {
            res.send(new ResponsePermisRol(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermisRol(null, null, err));
        });
}

