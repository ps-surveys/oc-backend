import { ResponseBody } from "../response-body";
import { Response } from "express";
import FormatDao from "../../service/FormatDao";

export class ResponseFormat extends ResponseBody {
  constructor(success: boolean, public data, err: string) {
    super(success, err);
  }
}

export function listFormat(req, res: Response, next) {
  FormatDao.formats().then(
    (data) => {
      res.send(new ResponseFormat(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormat(null, null, err));
    }
  );
}

/* export function FormatByName(req, res: Response, next) {
    FormatDao.formatByName(req.params.name)
        .then(data => {
            res.send(new ResponseFormat(true, data, null));
        }, err => {
            res.status(500).send(new ResponseFormat(null, null, err));
        });
} */

export function FormatById(req, res: Response, next) {
  FormatDao.formatById(req.params.id_form).then(
    (data) => {
      res.send(new ResponseFormat(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormat(null, null, err));
    }
  );
}

export function FormatByIdRf(req, res: Response, next) {
  FormatDao.formatByIdRf(req.params.id_form).then(
    (data) => {
      res.send(new ResponseFormat(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormat(null, null, err));
    }
  );
}
