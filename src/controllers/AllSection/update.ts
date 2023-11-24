import { Response } from "express";
import { ResponseSection } from './list';
import { ActSection } from '../../service/models/AllSection';
import actSectionDao from "../../service/AllSectionDao";

export function updateSection(req, res: Response, next) {
    const sec: ActSection = req.body;
    actSectionDao.update(sec)
        .then(data => {
            res.send(new ResponseSection(true, data, null));
        }, err => {
            res.status(500).send(new ResponseSection(false, null, err));
        });
}
