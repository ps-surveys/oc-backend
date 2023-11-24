import { ResponseBody } from '../response-body'
import { ActsCompFormat } from '../../service/models/SurveyAssignment';
import actsCompFormatDao from '../../service/SurveyAssignmentDao';

class ResponseCf extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActsCompFormat(req, res, next) {
    let cf: ActsCompFormat = req.body;
    /*
    actsCompFormatDao.quesByName(cf.nameQues)
    .then(data => {
        if (!data) {
    */
            actsCompFormatDao.insert(cf)
                .then(insert => {
                    res.send(new ResponseCf(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseCf(false, null, err));
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