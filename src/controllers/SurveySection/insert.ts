import { ResponseBody } from "../response-body";
import { FormatSection } from "../../service/models/SurveySection";
import FormatSectionDao from "../../service/SurveySectionDao";

class ResponseFs extends ResponseBody {
  constructor(success: boolean, public data, err: string) {
    super(success, err);
  }
}

export function insertActFormSection(req, res, next) {
  let fsection: FormatSection = req.body;
  FormatSectionDao.formatSectionsByFormOrder(
    fsection.idFormat,
    fsection.orderFs
  ).then(
    (data) => {
      if (!data) {
        FormatSectionDao.insert(fsection).then(
          (insert) => {
            res.send(new ResponseFs(true, insert, null));
          },
          (err) => {
            res.status(500).send(new ResponseFs(false, null, err));
          }
        );
      } else {
        res.send(new ResponseFs(false, null, "El número de orden ya existe"));
      }
    },
    (err) => {
      res.status(500).send(new ResponseFs(false, null, err));
    }
  );
}
