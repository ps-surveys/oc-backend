import { Response } from "express";
import { ResponseRegFormat } from "./list";
import { ArRegFormat } from "../../service/models/ArRegFormat";
import arRegFormatDao from "../../service/ArRegFormatDao";

export function updateRegFormat(req, res: Response, next) {
    const rf: ArRegFormat = req.body;
    arRegFormatDao.update(rf)
        .then(data => {
            res.send(new ResponseRegFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseRegFormat(false, null, err));
        });
}
