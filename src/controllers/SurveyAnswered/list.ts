import { ResponseBody } from "../response-body";
import { Response } from "express";
import arRegFormatDao from "../../service/ArRegFormatDao";

export class ResponseRegFormat extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listArRegFormats(req, res: Response, next) {
    arRegFormatDao.reg_formats()
        .then(data => {
            res.send(new ResponseRegFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseRegFormat(null, null, err));
        });
}

export function arRegFormatsByIdWp(req, res: Response, next) {
    arRegFormatDao.regFormatsByIdWp(req.params.id_wp)
        .then(data => {
            res.send(new ResponseRegFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseRegFormat(null, null, err));
        });
}

export function listRfWithFilters(req, res: Response, next) {
    arRegFormatDao.reg_formats_filters(req.params.data)
        .then(data => {
            res.send(new ResponseRegFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseRegFormat(null, null, err));
        });
}

export function infoSectionReport(req, res: Response, next) {
    arRegFormatDao.dataSectionReport(req.params.parameters)
        .then(data => {
            res.send(new ResponseRegFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseRegFormat(null, null, err));
        });
}

export function infoSectionReportByPost(req, res: Response, next) {
    console.log("parametros", req.body)
    arRegFormatDao.dataSectionReportByPost(req.body)
        .then(data => {
            res.send(new ResponseRegFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseRegFormat(null, null, err));
        });
    // res.status(200).send(new ResponseRegFormat(true, "succes", null));

}

