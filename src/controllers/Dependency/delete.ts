import { Response, Request } from "express";
import { ResponseDependency } from "./list";
import actDependencyDao from "../../service/DependencyDao";

export function deleteDependency(req: Request, res: Response, next) {
    const id = req.params.id;
    actDependencyDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseDependency(true, data, null));
        }, err => {
            res.status(500).send(new ResponseDependency(false, null, err));
        });
}
