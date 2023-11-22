import { ResponseBody } from '../response-body'
import { ActOption } from '../../service/models/Option';
import actOptionDao from '../../service/OptionDao';

class ResponseOpt extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActOption(req, res, next) {
    let option: ActOption = req.body;
    actOptionDao.optionByName(option.nameOption)
    .then(data => {
        if (!data) {
            actOptionDao.insert(option)
                .then(insert => {
                    res.send(new ResponseOpt(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseOpt(false, null, err));
                })
        }
        else {
            res.send(new ResponseOpt(false, null, "La opción ingresada ya existe"));
        }
    }, err => {
        res.status(500).send(new ResponseOpt(false, null, err));
    });
}