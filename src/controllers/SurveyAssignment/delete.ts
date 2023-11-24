import { Response, Request } from "express";
import { ResponseCompFormats } from "./list";
import actsCompFormatDao from "../../service/SurveyAssignmentDao";

export function deleteCompFormat(req: Request, res: Response, next) {
    const id = req.params.id;
    actsCompFormatDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseCompFormats(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompFormats(false, null, err));
        });
}

export function deleteCompFormatByIdForm(req: Request, res: Response, next) {
    const id_form = req.params.id_form;
    actsCompFormatDao.deleteByIdForm(parseInt(id_form))
        .then(data => {
            res.send(new ResponseCompFormats(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompFormats(false, null, err));
        });
}
