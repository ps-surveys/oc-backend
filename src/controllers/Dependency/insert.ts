import { ResponseBody } from '../response-body'
import { ActDependency } from '../../service/models/Dependency';
import actDependencyDao from '../../service/DependencyDao';

class ResponseDep extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertDependency(req, res, next) {
    let dep: ActDependency = req.body;
    /*
    actQuesDao.quesByName(ques.nameQues)
    .then(data => {
        if (!data) {
            */
           actDependencyDao.insert(dep)
                .then(insert => {
                    res.send(new ResponseDep(true, insert, null));
                }, err => {
                    res.status(500).send(new ResponseDep(false, null, err));
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