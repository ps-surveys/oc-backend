import { ResponseBody } from "../response-body";
import { Response } from "express";
import acsUserDao from "../../service/UserDao";

export class ResponseUser extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listAcsUsers(req, res: Response, next) {
    // const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
    // const skip = req.query.skip ? parseInt(req.query.skip) : undefined;    
    acsUserDao.users()
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(null, null, err));
        });
}

export function acsUserByEmail(req, res: Response, next) {
    acsUserDao.userByEmail(req.params.email)
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(null, null, err));
        });
}

export function acsUserById(req, res: Response, next) {
    acsUserDao.userById(req.params.id)
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(null, null, err));
        });
}

export function acsUsersByIdComp(req, res: Response, next) {
    acsUserDao.usersByIdComp(req.params.id_comp)
        .then(data => {
            res.send(new ResponseUser(true, data, null));
        }, err => {
            res.status(500).send(new ResponseUser(null, null, err));
        });
}

