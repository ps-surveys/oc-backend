import { ResponseBody } from '../response-body'
import { ActVersionSection } from '../../service/models/ActVersionSection';
import actVerSectionDao from '../../service/VerSectionDao';
import { ActSection } from '../../service/models/AllSection';

class ResponseVerSec extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActVerSec(req, res, next) {
    let versec: ActVersionSection = req.body;
    /* actVerSectionDao.verSecByIdVer(versec.idFormat, versec.codVersion, versec.version)
    .then(data => {
        if (!data) { */
    actVerSectionDao.insert(versec)
        .then(insert => {
            res.send(new ResponseVerSec(true, insert, null));
        }, err => {
            res.status(500).send(new ResponseVerSec(false, null, err));
        })
    /* }
    else {
        res.send(new ResponseVerSec(false, null, "La versión ya existe para este formato"));
    }
}, err => {
    res.status(500).send(new ResponseVerSec(false, null, err));
}); */
}


export function insertSectionsByVersion(req, res, next) {
    let sections: ActSection[] = req.body;
    let idVersion: number = req.params.id_ver
    var count = 0
    sections.forEach(element => {
        var verSec: ActVersionSection = {
            idSec: element.idSection,
            idVersion: idVersion
        }
        actVerSectionDao.insert(verSec)
            .then(data => {
                count += 1;
                if (count == sections.length) {
                    res.send(new ResponseVerSec(true, true, null));
                }
            }, err => {
                res.status(500).send(new ResponseVerSec(false, null, err));
            })
    })

}
