import { Router } from 'express';
import { listAcsWorkplace, acsWorkplacessByIdComp } from '../controllers/WorkArea/list';
import { insertAcsWorkplace } from '../controllers/WorkArea/insert';
import { deleteWorkplace } from '../controllers/WorkArea/delete';
import { updateWorkplace } from '../controllers/WorkArea/update';

const workplace: Router = Router();
workplace.post('/', insertAcsWorkplace);
workplace.put('/', updateWorkplace);
workplace.delete('/:id', deleteWorkplace);
workplace.get('/', listAcsWorkplace);
workplace.get('/id_comp/:id_comp', acsWorkplacessByIdComp);
export default workplace;