import { Response, Request } from "express";
import { ResponseRegFormat } from "./list";
import arRegFormatDao from "../../service/ArRegFormatDao";

export function deleteRegFormat(req: Request, res: Response, next) {
    const id = req.params.id;
    arRegFormatDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseRegFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseRegFormat(false, null, err));
        });
}
