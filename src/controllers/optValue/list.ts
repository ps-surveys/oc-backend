import { ResponseBody } from "../response-body";
import { Response } from "express";
import actOptValueDao from "../../service/optValueDao";

export class ResponseOptionValue extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function listActOptValues(req, res: Response, next) {
    actOptValueDao.optionValues()
        .then(data => {
            res.send(new ResponseOptionValue(true, data, null));
        }, err => {
            res.status(500).send(new ResponseOptionValue(null, null, err));
        });
}

export function actOptValByIdOpt(req, res: Response, next) {
    actOptValueDao.optionValByIdOpt(req.params.id_opt)
        .then(data => {
            res.send(new ResponseOptionValue(true, data, null));
        }, err => {
            res.status(500).send(new ResponseOptionValue(null, null, err));
        });
}

export function actOptValByIdOptAssets(req, res: Response, next) {
    actOptValueDao.optionValByIdOptAssets(req.params.id_opt_asts)
        .then(data => {
            res.send(new ResponseOptionValue(true, data, null));
        }, err => {
            res.status(500).send(new ResponseOptionValue(null, null, err));
        });
}

export function actOptValByIdOptVal(req, res: Response, next) {
    actOptValueDao.optionValByIdOptVal(req.params.id_opt_val)
        .then(data => {
            res.send(new ResponseOptionValue(true, data, null));
        }, err => {
            res.status(500).send(new ResponseOptionValue(null, null, err));
        });
}

