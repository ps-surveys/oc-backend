import { ResponseBody } from "../response-body";
import { Response } from "express";
import actFormatDao from "../../service/SurveyDao";

export class ResponseFormat extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActFormat(req, res: Response, next) { 
    actFormatDao.formats()
        .then(data => {
            res.send(new ResponseFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseFormat(null, null, err));
        });
}

/* export function actFormatByName(req, res: Response, next) {
    actFormatDao.formatByName(req.params.name)
        .then(data => {
            res.send(new ResponseFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseFormat(null, null, err));
        });
} */

export function actFormatById(req, res: Response, next) {
    actFormatDao.formatById(req.params.id_form)
        .then(data => {
            res.send(new ResponseFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseFormat(null, null, err));
        });
}

export function actFormatByIdRf(req, res: Response, next) {
    actFormatDao.formatByIdRf(req.params.id_form)
        .then(data => {
            res.send(new ResponseFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseFormat(null, null, err));
        });
}

