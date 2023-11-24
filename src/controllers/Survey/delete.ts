import { Response, Request } from "express";
import { ResponseFormat } from "./list";
import FormatDao from "../../service/SurveyDao";

export function deleteFormat(req: Request, res: Response, next) {
  const id = req.params.id;
  FormatDao.delete(parseInt(id)).then(
    (data) => {
      res.send(new ResponseFormat(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormat(false, null, err));
    }
  );
}
