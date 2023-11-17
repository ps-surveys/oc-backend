import { ResponseBody } from '../response-body'
import { ActCondition } from '../../service/models/Condition';
import actConditionDao from '../../service/QuestionDao';

class ResponseCond extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActCondition(req, res, next) {
    let cond: ActCondition = req.body;
    /*
    actQuesDao.quesByName(ques.nameQues)
    .then(data => {
        if (!data) {
            */
            actConditionDao.insert(cond)
                .then(insert => {
                    res.send(new ResponseCond(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseCond(false, null, err));
                })
    /*
        }
        else {
            res.send(new ResponseQues(false, null, "La pregunta ingresada ya existe"));
        }
    }, err => {
        res.status(500).send(new ResponseQues(false, null, err));
    });
    */
}