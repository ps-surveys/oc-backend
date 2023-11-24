import { ResponseBody } from '../response-body'
import { AcsWorkplace } from '../../service/models/Workplace';
import acsWorkplaceDao from '../../service/WorkAreaDao';

class ResponseWplace extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertAcsWorkplace(req, res, next) {
    let wplace: AcsWorkplace = req.body;
    acsWorkplaceDao.workplaceByName(wplace.nameWorkplace)
    .then(data => {
        if (!data) {
            acsWorkplaceDao.insert(wplace)
                .then(insert => {
                    res.send(new ResponseWplace(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseWplace(false, null, err));
                })
        }
        else {
            res.send(new ResponseWplace(false, null, "El sitio de trabajo ingresado ya existe"));
        }
    }, err => {
        res.status(500).send(new ResponseWplace(false, null, err));
    });
}