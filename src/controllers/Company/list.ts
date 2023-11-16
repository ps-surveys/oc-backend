import { ResponseBody } from "../response-body";
import { Response } from "express";
import acsCompanyDao from "../../service/CompanyDao";

export class ResponseCompany extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listAcsCompany(req, res: Response, next) {
    // const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
    // const skip = req.query.skip ? parseInt(req.query.skip) : undefined;    
    acsCompanyDao.companies()
        .then(data => {
            res.send(new ResponseCompany(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompany(null, null, err));
        });
}

export function acsCompanyById(req, res: Response, next) {
    acsCompanyDao.companyById(req.params.id)
        .then(data => {
            res.send(new ResponseCompany(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompany(null, null, err));
        });
}

