import { ResponseBody } from "../response-body";
import { Response } from "express";
import acsProfileDao from "../../service/ProfileDao";

export class ResponseProfile extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listAcsProfile(req, res: Response, next) { 
    acsProfileDao.profiles()
        .then(data => {
            res.send(new ResponseProfile(true, data, null));
        }, err => {
            res.status(500).send(new ResponseProfile(null, null, err));
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

