import { Response } from "express";
import { ResponseWorkplace } from "./list";
import { AcsWorkplace } from "../../service/models/Workplace";
import acsWorkplaceDao from "../../service/WorkAreaDao";

export function updateWorkplace(req, res: Response, next) {
    const wp: AcsWorkplace = req.body;
    acsWorkplaceDao.update(wp)
        .then(data => {
            res.send(new ResponseWorkplace(true, data, null));
        }, err => {
            res.status(500).send(new ResponseWorkplace(false, null, err));
        });
}
