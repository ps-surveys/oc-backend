import { Response, Request } from "express";
import { ResponsePermisRol } from './list';
import acsPermisRolDao from "../../service/PermisRoleDao";

export function deletePermisRol(req: Request, res: Response, next) {
    const id = req.params.id;
    acsPermisRolDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponsePermisRol(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermisRol(false, null, err));
        });
}

export function deletePermisRolByIdProf(req: Request, res: Response, next) {
    const id_role = req.params.id_role;
    acsPermisRolDao.deleteByIdProf(parseInt(id_role))
        .then(data => {
            res.send(new ResponsePermisRol(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermisRol(false, null, err));
        });
}