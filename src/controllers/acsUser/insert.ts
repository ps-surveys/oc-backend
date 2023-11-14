import { ResponseBody } from '../response-body'
import { AcsUser } from '../../service/models/AcsUser';
import acsUserDao from '../../service/AcsUserDao';


class ResponseLogin extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertAcsUser(req, res, next) {
    let user: AcsUser = req.body;
    //user.status = true;
    acsUserDao.userByEmail(user.emailUser)
    .then(data => {
        if (!data) {
            acsUserDao.insert(user)
                .then(insert => {
                    res.send(new ResponseLogin(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseLogin(false, null, err));
                })
        }
        else {
            res.send(new ResponseLogin(false, null, "El email ingresado ya existe"));
        }
    }, err => {
        res.status(500).send(new ResponseLogin(false, null, err));
    });
}