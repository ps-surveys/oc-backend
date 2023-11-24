import { Response, Request } from "express";
import { ResponseVersion } from "./list";
import actVersionDao from "../../service/SurveyVersionDao";

export function deleteVersion(req: Request, res: Response, next) {
    const id = req.params.id;
    actVersionDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseVersion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVersion(false, null, err));
        });
}