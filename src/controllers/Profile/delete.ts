import { Response, Request } from "express";
//import { UserService } from "../../services/user-service";
import { ResponseProfile } from './list';
import acsProfileDao from "../../service/ProfileDao";

export function deleteProfile(req: Request, res: Response, next) {
    const id = req.params.id;
    acsProfileDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseProfile(true, data, null));
        }, err => {
            res.status(500).send(new ResponseProfile(false, null, err));
        });
}