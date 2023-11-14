import { Router } from 'express';
import { listAcsPermissions } from '../controllers/acsPermission/list';
import { insertAcsPermission } from '../controllers/acsPermission/insert';
import { deletePermission } from '../controllers/acsPermission/delete';
import { updatePermission } from '../controllers/acsPermission/update';

const permission: Router = Router();
permission.post('/', insertAcsPermission);
permission.put('/',updatePermission);
permission.delete('/:id', deletePermission);
permission.get('/', listAcsPermissions);
//condition.get('/id_ques/:id_ques', actConditionByIdQues);
export default permission;