import { Router } from 'express';
import { listActFormat, actFormatById, actFormatByIdRf } from '../controllers/actFormat/list';
import { insertActFormat } from '../controllers/actFormat/insert';
import { deleteFormat } from '../controllers/actFormat/delete';
import { updateFormat } from '../controllers/actFormat/update';

const format: Router = Router();
format.post('/', insertActFormat);
format.put('/',updateFormat);
format.delete('/:id', deleteFormat);
format.get('/', listActFormat);
format.get('/id_form/:id_form', actFormatById);
format.get('/id_form_rf/:id_form', actFormatByIdRf);
//company.get('/email/:email', acsUserByEmail);
export default format;