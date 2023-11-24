import { Router } from 'express';
import { listAcsWorkplace, acsWorkplacessByIdComp } from '../controllers/WorkArea/list';
import { insertAcsWorkplace } from '../controllers/WorkArea/insert';
import { deleteWorkplace } from '../controllers/WorkArea/delete';
import { updateWorkplace } from '../controllers/WorkArea/update';

const workarea: Router = Router();
workarea.post('/', insertAcsWorkplace);
workarea.put('/', updateWorkplace);
workarea.delete('/:id', deleteWorkplace);
workarea.get('/', listAcsWorkplace);
workarea.get('/id_comp/:id_comp', acsWorkplacessByIdComp);
export default workarea;