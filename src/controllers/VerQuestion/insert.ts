import { ResponseBody } from '../response-body'
import { ActVersionQuestion } from '../../service/models/ActVersionQuestion';
import actVerQuestionDao from '../../service/VerQuestionDao';
import { ActQues } from '../../service/models/Question';

class ResponseVerQues extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertActVerQues(req, res, next) {
    let verques: ActVersionQuestion = req.body;
    /* actVerSectionDao.verSecByIdVer(versec.idFormat, versec.codVersion, versec.version)
    .then(data => {
        if (!data) { */
            actVerQuestionDao.insert(verques)
        .then(insert => {
            res.send(new ResponseVerQues(true, insert, null));
        }, err => {
            res.status(500).send(new ResponseVerQues(false, null, err));
        })
    /* }
    else {
        res.send(new ResponseVerSec(false, null, "La versión ya existe para este formato"));
    }
}, err => {
    res.status(500).send(new ResponseVerSec(false, null, err));
}); */
}

export function insertQuestionsByVersion(req, res, next) {
    let sections: ActQues[] = req.body;
    let idVersion: number = req.params.id_ver
    var count = 0
    sections.forEach(element => {
        var verSec: ActVersionQuestion = {
            idQues: element.idQues,
            idVersion: idVersion
        }
        actVerQuestionDao.insert(verSec)
            .then(data => {
                count += 1;
                if (count == sections.length) {
                    res.send(new ResponseVerQues(true, true, null));
                }
            }, err => {
                res.status(500).send(new ResponseVerQues(false, null, err));
            })
    })

}