import { ResponseBody } from '../response-body'
import { ActQues } from '../../service/models/Question';
import actQuesDao from '../../service/QuestionDao';

class ResponseQues extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActQues(req, res, next) {
    let ques: ActQues = req.body;
    // const idSec = req.params.idSec;

    // actQuesDao.quesByIdSecName(ques.idSec, ques.nameQues)
    //     .then(data => {
    //         if (!data) {
    //             actQuesDao.insert(ques)
    //                 .then(insert => {
    //                     res.send(new ResponseQues(true, insert, null));
    //                 }, err => {
    //                     res.status(500).send(new ResponseQues(false, null, err));
    //                 })
    //         }
    //         else {
    //             res.send(new ResponseQues(false, null, "La pregunta ingresada ya existe"));
    //         }
    //     }, err => {
    //         res.status(500).send(new ResponseQues(false, null, err));
    //     });

    Promise.all([
        actQuesDao.quesByIdSecName(ques.idSec, ques.nameQues),
        actQuesDao.quesByOrderQues(ques.idSec, ques.orderQues)
    ]).then(responses => {
        if (!responses[0] && !responses[1]) {
            actQuesDao.insert(ques)
                .then(insert => {
                    res.send(new ResponseQues(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseQues(false, null, err));
                })
        }else{

            if(responses[0]){
                res.send(new ResponseQues(false, null, "La pregunta ingresada ya existe"));
            }else{
                res.send(new ResponseQues(false, null, "El orden de la pregunta ya existe"));
            }
        }
    })
}