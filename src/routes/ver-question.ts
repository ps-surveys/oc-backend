import { Router } from 'express';
import { listActVerQuesByIdVer, listActVerQuesByIdVerInfoSec, listQuesNoVersion } from '../controllers/VerQuestion/list';
import { insertActVerQues, insertQuestionsByVersion } from '../controllers/VerQuestion/insert';
import { deleteVerQues } from '../controllers/VerQuestion/delete';

const verques: Router = Router();
verques.post('/', insertActVerQues);
verques.delete('/:id', deleteVerQues);
verques.get('/id_ver/:id_ver', listActVerQuesByIdVer);
verques.get('/infoQuestion/id_ver/:id_ver', listActVerQuesByIdVerInfoSec);
verques.get('/questionNoVersion/id_ver/:id_ver/id_sec/:id_sec', listQuesNoVersion);
verques.post('/insertQuestions/id_ver/:id_ver', insertQuestionsByVersion);
export default verques;