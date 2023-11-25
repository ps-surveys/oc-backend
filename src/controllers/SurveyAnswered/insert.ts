import { ResponseBody } from '../response-body'
import { ArRegFormat } from '../../service/models/ArRegFormat';
import arRegFormatDao from '../../service/ArRegFormatDao';

class ResponseRf extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertArRegFormat(req, res, next) {
    let dep: ArRegFormat = req.body;
    /*
    actQuesDao.quesByName(ques.nameQues)
    .then(data => {
        if (!data) {
            */
           arRegFormatDao.insert(dep)
                .then(insert => {
                    res.send(new ResponseRf(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseRf(false, null, err));
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