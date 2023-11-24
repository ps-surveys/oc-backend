import { Response, Request } from "express";
import { ResponseFormSection } from "./list";
import FormatSectionDao from "../../service/SurveySectionDao";

export function deleteFormSection(req: Request, res: Response, next) {
  const id = req.params.id;
  FormatSectionDao.delete(parseInt(id)).then(
    (data) => {
      res.send(new ResponseFormSection(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormSection(false, null, err));
    }
  );
}
