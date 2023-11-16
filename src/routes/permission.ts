import { Router } from 'express';
import { listAcsPermissions } from '../controllers/Permission/list';
import { insertAcsPermission } from '../controllers/Permission/insert';
import { deletePermission } from '../controllers/Permission/delete';
import { updatePermission } from '../controllers/Permission/update';

const permission: Router = Router();
permission.post('/', insertAcsPermission);
permission.put('/',updatePermission);
permission.delete('/:id', deletePermission);
permission.get('/', listAcsPermissions);
//condition.get('/id_ques/:id_ques', actConditionByIdQues);
export default permission;