import { ResponseBody } from '../response-body'
import { ActSection } from '../../service/models/AllSection';
import actSectionDao from '../../service/AllSectionDao';

class ResponseSec extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActSection(req, res, next) {
    let section: ActSection = req.body;
    actSectionDao.sectionByName(section.nameSection)
    .then(data => {
        if (!data) {
            actSectionDao.insert(section)
                .then(insert => {
                    res.send(new ResponseSec(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseSec(false, null, err));
                })
        }
        else {
            res.send(new ResponseSec(false, null, "La sección ingresada ya existe"));
        }
    }, err => {
        res.status(500).send(new ResponseSec(false, null, err));
    });
}