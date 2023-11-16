import { Response, Request } from "express";
import { ResponsePermission } from './list';
import acsPermissionDao from "../../service/PermissionDao";

export function deletePermission(req: Request, res: Response, next) {
    const id = req.params.id;
    acsPermissionDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponsePermission(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermission(false, null, err));
        });
}