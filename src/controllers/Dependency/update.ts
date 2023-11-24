import { Response } from "express";
import { ResponseDependency } from "./list";
import { ActDependency } from "../../service/models/Dependency";
import actDependencyDao from "../../service/DependencyDao";

export function updateDependency(req, res: Response, next) {
    const dep: ActDependency = req.body;
    actDependencyDao.update(dep)
        .then(data => {
            res.send(new ResponseDependency(true, data, null));
        }, err => {
            res.status(500).send(new ResponseDependency(false, null, err));
        });
}
