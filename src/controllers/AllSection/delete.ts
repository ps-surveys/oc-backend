import { Response, Request } from "express";
import { ResponseSection } from "./list";
import actSectionDao from "../../service/AllSectionDao";

export function deleteSection(req: Request, res: Response, next) {
    const id = req.params.id;
    actSectionDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseSection(true, data, null));
        }, err => {
            res.status(500).send(new ResponseSection(false, null, err));
        });
}
