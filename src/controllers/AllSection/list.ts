import { ResponseBody } from "../response-body";
import { Response } from "express";
import actSectionDao from "../../service/AllSectionDao";

export class ResponseSection extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActSections(req, res: Response, next) {
    actSectionDao.sections()
        .then(data => {
            res.send(new ResponseSection(true, data, null));
        }, err => {
            res.status(500).send(new ResponseSection(null, null, err));
        });
}

export function actSectionsNotInForm(req, res: Response, next) {
    actSectionDao.sectionsNotInForm(req.params.id_form)
        .then(data => {
            res.send(new ResponseSection(true, data, null));
        }, err => {
            res.status(500).send(new ResponseSection(null, null, err));
        });
}

export function actSectionById(req, res: Response, next) {
    actSectionDao.sectionByIdSec(req.params.id_sec)
        .then(data => {
            res.send(new ResponseSection(true, data, null));
        }, err => {
            res.status(500).send(new ResponseSection(null, null, err));
        });
}

// export function actFormatByName(req, res: Response, next) {
//     actSectionDao.formatByName(req.params.name)
//         .then(data => {
//             res.send(new ResponseFormat(true, data, null));
//         }, err => {
//             res.status(500).send(new ResponseFormat(null, null, err));
//         });
// }

