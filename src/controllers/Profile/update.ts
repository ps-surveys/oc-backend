import { Response } from "express";
// import { Usuario } from "../../services/models/users";
// import { UserService } from "../../services/user-service";
import { ResponseProfile } from './list';
import { AcsProfile } from '../../service/models/Profile';
import acsProfileDao from "../../service/ProfileDao";

export function updateProfile(req, res: Response, next) {
    const pro: AcsProfile = req.body;
    acsProfileDao.update(pro)
        .then(data => {
            res.send(new ResponseProfile(true, data, null));
        }, err => {
            res.status(500).send(new ResponseProfile(false, null, err));
        });
}
