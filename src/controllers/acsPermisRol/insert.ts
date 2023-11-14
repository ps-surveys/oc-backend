import { ResponseBody } from '../response-body'
import { AcsPermisRol } from '../../service/models/AcsPermisRol';
import acsPermisRolDao from '../../service/AcsPermisRolDao';

class ResponsePr extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertAcsPermisRol(req, res, next) {
    let permisrol: AcsPermisRol = req.body;
    acsPermisRolDao.permissionsRolByIdProfPermis(permisrol.idProf, permisrol.idPermis)
        .then(data => {
            if (!data) {
                acsPermisRolDao.insert(permisrol)
                    .then(insert => {
                        res.send(new ResponsePr(true, insert, null));
                    }, err => {
                        res.status(500).send(new ResponsePr(false, null, err));
                    })
            }
            else {
                res.send(new ResponsePr(false, null, "El permiso para el rol ingresado ya existe"));
            }
        }, err => {
            res.status(500).send(new ResponsePr(false, null, err));
        });
}