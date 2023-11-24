import { Response } from "express";
import { ResponseCompFormats } from "./list";
import { ActsCompFormat } from "../../service/models/SurveyAssignment";
import actsCompFormatDao from "../../service/SurveyAssignmentDao";

export function updateCompFormat(req, res: Response, next) {
    const cf: ActsCompFormat = req.body;
    actsCompFormatDao.update(cf)
        .then(data => {
            res.send(new ResponseCompFormats(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompFormats(false, null, err));
        });
}
