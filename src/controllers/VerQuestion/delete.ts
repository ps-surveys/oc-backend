import { Response, Request } from "express";
import { ResponseVerQues } from "./list";
import actVerQuestionDao from "../../service/VerQuestionDao";

export function deleteVerQues(req: Request, res: Response, next) {
    const id = req.params.id;
    actVerQuestionDao.delete(parseInt(id))
        .then(data => {
            res.send(new ResponseVerQues(true, data, null));
        }, err => {
            res.status(500).send(new ResponseVerQues(false, null, err));
        });
}