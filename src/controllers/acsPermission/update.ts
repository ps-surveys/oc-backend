import { Response } from "express";
import { ResponsePermission } from './list';
import { AcsPermission } from '../../service/models/AcsPermission';
import acsPermissionDao from "../../service/AcsPermissionDao";

export function updatePermission(req, res: Response, next) {
    const per: AcsPermission = req.body;
    acsPermissionDao.update(per)
        .then(data => {
            res.send(new ResponsePermission(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermission(false, null, err));
        });
}
