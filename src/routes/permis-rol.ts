import { Router } from 'express';
import { listAcsPermissionsRol, acsPermissionsRolByIdProf, acsPermissionsRolByIdProfPermis } from '../controllers/PermisRol/list';
import { insertAcsPermisRol } from '../controllers/PermisRol/insert';
import { deletePermisRol, deletePermisRolByIdProf } from '../controllers/PermisRol/delete';
import { updatePermisRol } from '../controllers/PermisRol/update';

const permisrol: Router = Router();
permisrol.post('/', insertAcsPermisRol);
permisrol.put('/', updatePermisRol);
permisrol.delete('/:id', deletePermisRol);
permisrol.delete('/id_role/:id_role', deletePermisRolByIdProf);
permisrol.get('/', listAcsPermissionsRol);
permisrol.get('/id_role/:id_role', acsPermissionsRolByIdProf);
permisrol.get('/id_role/:id_role/id_permis/:id_permis', acsPermissionsRolByIdProfPermis);
export default permisrol;