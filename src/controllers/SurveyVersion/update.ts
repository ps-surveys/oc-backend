import { Response } from "express";
import { ResponseVersion } from './list';
import { SurveyVersion } from '../../service/models/SurveyVersion';
import actVersionDao from "../../service/SurveyVersionDao";

export function updateVersion(req, res, next) {
    let version: SurveyVersion = req.body;
    actVersionDao.versionsByIdFormCodVerWhenUpdate(version.idVersion, version.idFormat, version.codVersion, version.version)
        .then(data => {
            if (!data) {
                actVersionDao.update(version)
                    .then(data => {
                        res.send(new ResponseVersion(true, data, null));
                    }, err => {
                        res.status(500).send(new ResponseVersion(false, null, err));
                    });
            }
            else {
                res.send(new ResponseVersion(false, null, "No puede actualizar con estos datos ya que hay otra versión con esta información"));
            }
        }, err => {
            res.status(500).send(new ResponseVersion(false, null, err));
        });
}
