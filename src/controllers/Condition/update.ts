import { Response } from "express";
import { ResponseCondition } from "./list";
import { ActCondition } from "../../service/models/Condition";
import actConditionDao from "../../service/ConditionDao";

export function updateCondition(req, res: Response, next) {
    const cond: ActCondition = req.body;
    actConditionDao.update(cond)
        .then(data => {
            res.send(new ResponseCondition(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCondition(false, null, err));
        });
}
