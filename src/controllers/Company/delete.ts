import { Response, Request } from "express";
//import { UserService } from "../../services/user-service";
import { ResponseCompany } from "./list";
import acsCompanyDao from "../../service/CompanyDao";

export function deleteCompany(req: Request, res: Response, next) {
    const id = req.params.id;
    acsCompanyDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseCompany(true, data, null));
        }, err => {
            res.status(500).send(new ResponseCompany(false, null, err));
        });
}
