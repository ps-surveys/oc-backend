import { Response, Request } from "express";
import { ResponseVerSec } from "./list";
import actVerSectionDao from "../../service/VerSectionDao";

export function deleteVerSec(req: Request, res: Response, next) {
    const id = req.params.id;
    actVerSectionDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseVerSec(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVerSec(false, null, err));
        });
}