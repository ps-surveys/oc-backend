import { Response, Request } from 'express';
import { ResponseUser } from "./list";
import { AcsUser } from "../../service/models/User";
import acsUserDao from "../../service/UserDao";

export function updateUser(req: Request, res: Response, next) {
    const usr: AcsUser = req.body;
    const cp = req.params.chPass;
    acsUserDao.update(usr, parseInt(cp))
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(false, null, err));
        });
}

/* export function updateUserInfo(req: Request, res: Response, next) {
    const usr: AcsUser = req.body;
    acsUserDao.updateInfo(usr)
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(false, null, err));
        });
} */
