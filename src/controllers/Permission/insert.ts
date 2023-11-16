import { ResponseBody } from '../response-body'
import { AcsPermission } from '../../service/models/Permission';
import acsPermissionDao from '../../service/PermissionDao';

class ResponsePerm extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertAcsPermission(req, res, next) {
    let permission: AcsPermission = req.body;
    acsPermissionDao.permissionByName(permission.namePermis)
    .then(data => {
        if (!data) {
            acsPermissionDao.insert(permission)
                .then(insert => {
                    res.send(new ResponsePerm(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponsePerm(false, null, err));
                })
        }
        else {
            res.send(new ResponsePerm(false, null, "El permiso ingresado ya existe"));
        }
    }, err => {
        res.status(500).send(new ResponsePerm(false, null, err));
    });
}