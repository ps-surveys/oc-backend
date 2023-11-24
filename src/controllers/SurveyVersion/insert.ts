import { ResponseBody } from '../response-body'
import { SurveyVersion } from '../../service/models/SurveyVersion';
import actVersionDao from '../../service/SurveyVersionDao';

class ResponseVersion extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActVersion(req, res, next) {
    let version: SurveyVersion = req.body;
    actVersionDao.versionsByIdFormCodVer(version.idFormat, version.codVersion, version.version)
    .then(data => {
        if (!data) {
            actVersionDao.insert(version)
                .then(insert => {
                    res.send(new ResponseVersion(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseVersion(false, null, err));
                })
        }
        else {
            res.send(new ResponseVersion(false, null, "La versión ya existe para este formato"));
        }
    }, err => {
        res.status(500).send(new ResponseVersion(false, null, err));
    });
}
