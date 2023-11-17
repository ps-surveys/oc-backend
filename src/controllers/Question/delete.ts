import { Response, Request } from "express";
import { ResponseQuestion } from "./list";
import actQuesDao from "../../service/QuestionDao";

export function deleteQuestion(req: Request, res: Response, next) {
    const id = req.params.id;
    const id_sec = req.params.id_sec;
    actQuesDao.delete(parseInt(id), parseInt(id_sec))
        .then(data => {
            res.send(new ResponseQuestion(true, data, null));
        }, err => {
            res.status(500).send(new ResponseQuestion(false, null, err));
        });
}
