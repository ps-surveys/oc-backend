import { Router } from 'express';
import { listActQues, actQuesByIdSec, actQuestionById, actQuesByIdSecNotIn, actQuesByIdSecFill } from '../controllers/Question/list';
import { insertActQues } from '../controllers/Question/insert';
import { deleteQuestion } from '../controllers/Question/delete';
import { updateQuestion } from '../controllers/Question/update';

const question: Router = Router();
question.post('/', insertActQues);
question.put('/', updateQuestion);
question.delete('/:id/id_sec/:id_sec', deleteQuestion);
question.get('/', listActQues);
question.get('/id_ques/:id_ques', actQuestionById);
question.get('/id_sec/:id_sec', actQuesByIdSec);
question.get('/id_sec_ni/:id_sec_ni', actQuesByIdSecNotIn);
question.get('/id_sec/:id_sec/id_sv/:id_sv', actQuesByIdSecFill);
// question.get('/name/:name', actQuesByName);
export default question;
