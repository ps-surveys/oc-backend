import { Response } from "express";
import { ResponsePermisRol } from './list';
import { AcsPermisRol } from '../../service/models/PermisRole';
import acsPermisRolDao from "../../service/PermisRoleDao";

export function updatePermisRol(req, res: Response, next) {
    const prol: AcsPermisRol = req.body;
    acsPermisRolDao.update(prol)
        .then(data => {
            res.send(new ResponsePermisRol(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermisRol(false, null, err));
        });
}
