import { Response, Request } from "express";
import { ResponseCondition } from "./list";
import actConditionDao from "../../service/QuestionDao";

export function deleteCondition(req: Request, res: Response, next) {
    const id = req.params.id;
    actConditionDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseCondition(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCondition(false, null, err));
        });
}
