import { Response } from "express";
import { ResponseFormSection } from "./list";
import { FormatSection } from "../../service/models/FormatSection";
import FormatSectionDao from "../../service/FormatSectionDao";

export function updateFormSection(req, res: Response, next) {
  const fsection: FormatSection = req.body;

  /* FormatSectionDao.formatSectionsByFormOrder(fsection.idFormat, fsection.orderFs)
        .then(data => {
            if (!data) { */
  FormatSectionDao.update(fsection).then(
    (data) => {
      res.send(new ResponseFormSection(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseFormSection(false, null, err));
    }
  );
  /* }
    else {
        res.send(new ResponseFormSection(false, null, "El número de orden ya existe"));
    }
}, err => {
    res.status(500).send(new ResponseFormSection(false, null, err));
}); */
}
