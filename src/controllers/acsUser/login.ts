import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { secret } from '../../config/global';
import { ResponseBody } from '../response-body';
import acsUserDao from '../../service/AcsUserDao';
import { AcsUser } from '../../service/models/AcsUser';

interface RequestBody {
    username: string;
    pass: string;
}

class ResponseLogin extends ResponseBody {
    constructor(success: boolean, public data: any, err: string) {
        super(success, err);
    }
}

export function login(req: Request, res: Response, next) {
    let login = req.body as RequestBody;
    acsUserDao.login(login.username, login.pass)
        .then((data: AcsUser) => {
            if (data) {
                let token = sign({ id: data.idUser }, secret);
                delete data.passUser;
                res.send(new ResponseLogin(true, { user: data, token: token }, null));
            } else {
                res.send(new ResponseLogin(false, null, "Usuario o contraseña incorrectos"));
            }
        }, err => {
            console.log(err)
            res.status(500).send(new ResponseLogin(false, null, err));
        });
}