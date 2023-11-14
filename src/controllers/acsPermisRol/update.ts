import { Response } from "express";
import { ResponsePermisRol } from './list';
import { AcsPermisRol } from '../../service/models/AcsPermisRol';
import acsPermisRolDao from "../../service/AcsPermisRolDao";

export function updatePermisRol(req, res: Response, next) {
    const prol: AcsPermisRol = req.body;
    acsPermisRolDao.update(prol)
        .then(data => {
            res.send(new ResponsePermisRol(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermisRol(false, null, err));
        });
}
