import { Response } from "express";
import { ResponseCompany } from "./list";
import { AcsCompany } from "../../service/models/AcsCompany";
import acsCompanyDao from "../../service/AcsCompanyDao";

export function updateCompany(req, res: Response, next) {
    const com: AcsCompany = req.body;
    acsCompanyDao.update(com)
        .then(data => {
            res.send(new ResponseCompany(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompany(false, null, err));
        });
}
