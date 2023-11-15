import { Router } from 'express';
import { listAcsPermissionsRol, acsPermissionsRolByIdProf, acsPermissionsRolByIdProfPermis } from '../controllers/acsPermisRol/list';
import { insertAcsPermisRol } from '../controllers/acsPermisRol/insert';
import { deletePermisRol, deletePermisRolByIdProf } from '../controllers/acsPermisRol/delete';
import { updatePermisRol } from '../controllers/acsPermisRol/update';

const permisrol: Router = Router();
permisrol.post('/', insertAcsPermisRol);
permisrol.put('/', updatePermisRol);
permisrol.delete('/:id', deletePermisRol);
permisrol.delete('/id_role/:id_role', deletePermisRolByIdProf);
permisrol.get('/', listAcsPermissionsRol);
permisrol.get('/id_role/:id_role', acsPermissionsRolByIdProf);
permisrol.get('/id_role/:id_role/id_permis/:id_permis', acsPermissionsRolByIdProfPermis);
export default permisrol;