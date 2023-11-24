import { ResponseBody } from '../response-body'
import { Format } from '../../service/models/Survey';
import actFormatDao from '../../service/SurveyDao';

class ResponseForm extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActFormat(req, res, next) {
    let format: Format = req.body;
    actFormatDao.formatByName(format.nameFormat, format.codFormat)
    .then(data => {
        if (!data) {
            actFormatDao.insert(format)
                .then(insert => {
                    res.send(new ResponseForm(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseForm(false, null, err));
                })
        }
        else {
            res.send(new ResponseForm(false, null, "El formato ingresado ya existe"));
        }
    }, err => {
        res.status(500).send(new ResponseForm(false, null, err));
    });
}