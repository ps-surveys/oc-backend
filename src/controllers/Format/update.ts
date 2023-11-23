import { Response } from "express";
import { ResponseFormat } from "./list";
import { Format } from "../../service/models/Format";
import FormatDao from "../../service/FormatDao";

export function updateFormat(req, res: Response, next) {
  const form: Format = req.body;
  FormatDao.update(form).then(
    (data) => {
      res.send(new ResponseFormat(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormat(false, null, err));
    }
  );
}
