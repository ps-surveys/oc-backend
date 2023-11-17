import { Response, Request } from "express";
import { ResponseOptionValue } from "./list";
import actOptionValueDao from "../../service/optValueDao";

export function deleteOptionValue(req: Request, res: Response, next) {
    const id = req.params.id;
    actOptionValueDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseOptionValue(true, data, null));
        }, err => {
            res.status(500).send(new ResponseOptionValue(false, null, err));
        });
}

export function actDeleteOptValByIdOpt(req: Request, res: Response, next) {
    const id_opt = req.params.id_opt;
    actOptionValueDao.deleteByIdOpt(parseInt(id_opt))
        .then(data => {
            res.send(new ResponseOptionValue(true, data, null));
        }, err => {
            res.status(500).send(new ResponseOptionValue(false, null, err));
        });
}
