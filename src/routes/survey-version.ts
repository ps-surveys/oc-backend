import { Router } from 'express';
import { listActVersionByIdForm, actVersionById } from '../controllers/SurveyVersion/list';
import { insertActVersion } from '../controllers/SurveyVersion/insert';
import { deleteVersion } from '../controllers/SurveyVersion/delete';
import { updateVersion } from '../controllers/SurveyVersion/update';

const version: Router = Router();
version.post('/', insertActVersion);
version.put('/',updateVersion);
version.delete('/:id', deleteVersion);
version.get('/id_form/:id_form', listActVersionByIdForm);
version.get('/id_ver/:id_ver', actVersionById);
export default version;