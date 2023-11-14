import { Router } from 'express';
import { listAcsProfile } from '../controllers/acsProfile/list';
import { insertAcsProfile } from '../controllers/acsProfile/insert';
import { deleteProfile } from '../controllers/acsProfile/delete';
import { updateProfile } from '../controllers/acsProfile/update';

const profile: Router = Router();
profile.post('/', insertAcsProfile);
profile.put('/',updateProfile);
profile.delete('/:id', deleteProfile);
profile.get('/', listAcsProfile);
export default profile;