import { ResponseBody } from "../response-body";
import { Response } from "express";
import FormatSectionDao from "../../service/FormatSectionDao";

export class ResponseFormSection extends ResponseBody {
  constructor(success: boolean, public data, err: string) {
    super(success, err);
  }
}

export function listActFormSections(req, res: Response, next) {
  FormatSectionDao.formatSections().then(
    (data) => {
      res.send(new ResponseFormSection(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormSection(null, null, err));
    }
  );
}

export function actFormSectionByIdForm(req, res: Response, next) {
  FormatSectionDao.formatSectionsByIdForm(req.params.id_form).then(
    (data) => {
      res.send(new ResponseFormSection(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormSection(null, null, err));
    }
  );
}

export function actFormSectionByIdFormFill(req, res: Response, next) {
  FormatSectionDao.formatSectionsByIdFormFill(
    req.params.id_form_f,
    req.params.id_sv
  ).then(
    (data) => {
      res.send(new ResponseFormSection(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormSection(null, null, err));
    }
  );
}
