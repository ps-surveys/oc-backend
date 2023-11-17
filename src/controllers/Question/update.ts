import { Response } from "express";
import { ResponseQuestion } from "./list";
import { ActQues } from "../../service/models/Question";
import actQuesDao from "../../service/QuestionDao";

export function updateQuestion(req, res: Response, next) {
    const ques: ActQues = req.body;

    actQuesDao.quesByOrderQues(ques.idSec, ques.orderQues).then(data => {

        if (!data) {
            actQuesDao.update(ques)
                .then(data => {
                    res.send(new ResponseQuestion(true, data, null));
                }, err => {
                    res.status(500).send(new ResponseQuestion(false, null, err));
                });
        } else {
            res.send(new ResponseQuestion(false, null, "El orden de la pregunta ya existe"));
        }
    })

}
