import { Response, Request } from "express";
import { ResponseWorkplace } from "./list";
import acsWorkplaceDao from '../../service/WorkAreaDao';

export function deleteWorkplace(req: Request, res: Response, next) {
    const id = req.params.id;
    acsWorkplaceDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseWorkplace(true, data, null));
        }, err => {
            res.status(500).send(new ResponseWorkplace(false, null, err));
        });
}
