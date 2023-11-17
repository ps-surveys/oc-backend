import { Router } from 'express';
import { listActConditions, actConditionsByIdQues } from '../controllers/Condition/list';
import { insertActCondition } from '../controllers/Condition/insert';
import { deleteCondition } from '../controllers/Condition/delete';
import { updateCondition } from '../controllers/Condition/update';

const condition: Router = Router();
condition.post('/', insertActCondition);
condition.put('/', updateCondition);
condition.delete('/:id', deleteCondition);
condition.get('/', listActConditions);
condition.get('/id_ques/:id_ques', actConditionsByIdQues);
export default condition;