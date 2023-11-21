import { Response } from "express";
import { ResponseOptionValue } from './list';
import { ActOptionValue } from '../../service/models/OptValue';
import actOptValueDao from '../../service/OptValueDao';

export function updateOptionValue(req, res: Response, next) {
    const optv: ActOptionValue = req.body;
    actOptValueDao.update(optv)
        .then(data => {
            res.send(new ResponseOptionValue(true, data, null));
        }, err => {
            res.status(500).send(new ResponseOptionValue(false, null, err));
        });
}
