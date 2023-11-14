import { ResponseBody } from "../response-body";
import { Response } from "express";
import acsPermissionDao from "../../service/AcsPermissionDao";

export class ResponsePermission extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listAcsPermissions(req, res: Response, next) { 
    acsPermissionDao.permissions()
        .then(data => {
            res.send(new ResponsePermission(true, data, null));
        }, err => {
            res.status(500).send(new ResponsePermission(null, null, err));
        });
}

// export function acsUserByEmail(req, res: Response, next) {
//     acsUserDao.userByEmail(req.params.email)
//         .then(data => {
//             res.send(new ResponseUser(true, data, null));
//         }, err => {
//             res.status(500).send(new ResponseUser(null, null, err));
//         });
// }

