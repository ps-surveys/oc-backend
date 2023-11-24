import { ResponseBody } from "../response-body";
import { Response } from "express";
import actOptionDao from "../../service/OptionDao";

export class ResponseOption extends ResponseBody {
  constructor(success: boolean, public data, err: string) {
    super(success, err);
  }
}

export function listActOptions(req, res: Response, next) {
  actOptionDao.options().then(
    (data) => {
      res.send(new ResponseOption(true, data, null));
    },
    (err) => {
      res.status(500).send(new ResponseOption(null, null, err));
    }
  );
}

// export function FormatByName(req, res: Response, next) {
//     actSectionDao.formatByName(req.params.name)
//         .then(data => {
//             res.send(new ResponseFormat(true, data, null));
//         }, err => {
//             res.status(500).send(new ResponseFormat(null, null, err));
//         });
// }
