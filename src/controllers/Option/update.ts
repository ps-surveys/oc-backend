import { Response } from "express";
import { ResponseOption } from './list';
import { ActOption } from '../../service/models/Option';
import actOptionDao from '../../service/OptionDao';

export function updateOption(req, res: Response, next) {
    const opt: ActOption = req.body;
    actOptionDao.update(opt)
        .then(data => {
            res.send(new ResponseOption(true, data, null));
        }, err => {
            res.status(500).send(new ResponseOption(false, null, err));
        });
}
