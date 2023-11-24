import { Router } from 'express';
import { listActDependencies, actDependenciesByIdQues, actDependenciesByIdSec, loadQuestionDependency } from '../controllers/Dependency/list';
import { insertDependency } from '../controllers/Dependency/insert';
import { deleteDependency } from '../controllers/Dependency/delete';
import { updateDependency } from '../controllers/Dependency/update';

const dependency: Router = Router();
dependency.post('/', insertDependency);
dependency.put('/', updateDependency);
dependency.delete('/:id', deleteDependency);
dependency.get('/', listActDependencies);
dependency.get('/id_ques/:id_ques', actDependenciesByIdQues);
dependency.get('/id_sec/:id_sec', actDependenciesByIdSec);

dependency.get('/id_ques_or_sec/:id_ques/type/:type', loadQuestionDependency);

export default dependency;