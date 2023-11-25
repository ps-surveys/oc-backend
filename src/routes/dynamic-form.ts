import { Router } from 'express';
import { insertSectionTable, addFileDynamicForm } from '../controllers/DynamicForm/insert';

const dymanicform: Router = Router();
dymanicform.post('/', insertSectionTable);
dymanicform.post('/file/:name', addFileDynamicForm);
export default dymanicform;