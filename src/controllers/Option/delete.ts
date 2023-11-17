import { Response, Request } from "express";
import { ResponseOption } from "./list";
import actOptionDao from "../../service/OptionDao";

export function deleteOption(req: Request, res: Response, next) {
    const id = req.params.id;
    actOptionDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseOption(true, data, null));
        }, err => {
            res.status(500).send(new ResponseOption(false, null, err));
        });
}
