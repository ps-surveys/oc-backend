import { ResponseBody } from '../response-body'
import { ActOptionValue } from '../../service/models/OptValue';
import actOptValueDao from '../../service/OptValueDao';

class ResponseOptVal extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActOptValue(req, res, next) {
    let optvalue: ActOptionValue = req.body;
    actOptValueDao.optionValueByName(optvalue.idOpt, optvalue.nameOptValue)
        .then(data => {
            if (!data) {
                actOptValueDao.insert(optvalue)
                    .then(insert => {
                        res.send(new ResponseOptVal(true, insert, null));
                    }, err => {
                        res.status(500).send(new ResponseOptVal(false, null, err));
                    })
            }
            else {
                res.send(new ResponseOptVal(false, null, "El valor de opción ingresado ya existe"));
            }
        }, err => {
            res.status(500).send(new ResponseOptVal(false, null, err));
        });
}