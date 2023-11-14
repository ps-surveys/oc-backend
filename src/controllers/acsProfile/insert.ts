import { ResponseBody } from '../response-body'
import { AcsProfile } from '../../service/models/AcsProfile';
import acsProfileDao from '../../service/AcsProfileDao';

class ResponseProf extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertAcsProfile(req, res, next) {
    let profile: AcsProfile = req.body;
    acsProfileDao.profileByName(profile.nameProf)
    .then(data => {
        if (!data) {
            acsProfileDao.insert(profile)
                .then(insert => {
                    res.send(new ResponseProf(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseProf(false, null, err));
                })
        }
        else {
            res.send(new ResponseProf(false, null, "El perfil ingresado ya existe"));
        }
    }, err => {
        res.status(500).send(new ResponseProf(false, null, err));
    });
}