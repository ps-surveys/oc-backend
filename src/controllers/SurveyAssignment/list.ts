import { ResponseBody } from "../response-body";
import { Response } from "express";
import actsCompFormatDao from "../../service/SurveyAssignmentDao";

export class ResponseCompFormats extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActsCompFormats(req, res: Response, next) {
    actsCompFormatDao.compFormats()
        .then(data => {
            res.send(new ResponseCompFormats(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompFormats(null, null, err));
        });
}

export function actsCompFormatsByIdComp(req, res: Response, next) {
    actsCompFormatDao.compFormatsByIdComp(req.params.id_comp)
        .then(data => {
            res.send(new ResponseCompFormats(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompFormats(null, null, err));
        });
}

export function actsCompFormatsByIdCompBio(req, res: Response, next) {
    actsCompFormatDao.compFormatsByIdCompBio(req.params.id_comp)
        .then(data => {
            res.send(new ResponseCompFormats(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompFormats(null, null, err));
        });
}

export function actsCompFormatsByIdForm(req, res: Response, next) {
    actsCompFormatDao.compFormatsByIdForm(req.params.id_form)
        .then(data => {
            res.send(new ResponseCompFormats(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompFormats(null, null, err));
        });
}

export function actsCompFormatById(req, res: Response, next) {
    actsCompFormatDao.compFormatById(req.params.id_cf)
        .then(data => {
            res.send(new ResponseCompFormats(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompFormats(null, null, err));
        });
}

