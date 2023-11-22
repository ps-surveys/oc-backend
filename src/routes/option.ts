import { Router } from 'express';
import { listActOptions } from '../controllers/Option/list';
import { insertActOption } from '../controllers/Option/insert';
import { deleteOption } from '../controllers/Option/delete';
import { updateOption } from '../controllers/Option/update';

const option: Router = Router();
option.post('/', insertActOption);
option.put('/',updateOption);
option.delete('/:id', deleteOption);
option.get('/', listActOptions);
export default option;