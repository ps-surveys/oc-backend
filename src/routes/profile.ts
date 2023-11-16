import { Router } from 'express';
import { listAcsProfile } from '../controllers/Profile/list';
import { insertAcsProfile } from '../controllers/Profile/insert';
import { deleteProfile } from '../controllers/Profile/delete';
import { updateProfile } from '../controllers/Profile/update';

const profile: Router = Router();
profile.post('/', insertAcsProfile);
profile.put('/',updateProfile);
profile.delete('/:id', deleteProfile);
profile.get('/', listAcsProfile);
export default profile;