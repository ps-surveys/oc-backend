import { Response } from "express";
import { ResponseCompany } from "./list";
import { AcsCompany } from "../../service/models/Company";
import acsCompanyDao from "../../service/CompanyDao";

export function updateCompany(req, res: Response, next) {
    const com: AcsCompany = req.body;
    acsCompanyDao.update(com)
        .then(data => {
            res.send(new ResponseCompany(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompany(false, null, err));
        });
}
