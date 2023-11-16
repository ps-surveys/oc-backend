import { Response, Request } from "express";
import { ResponseUser } from "./list";
import acsUserDao from "../../service/UserDao";

export function deleteUser(req: Request, res: Response, next) {
    const id = req.params.id;
    acsUserDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(false, null, err));
        });
}
