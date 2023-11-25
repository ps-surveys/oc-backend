import { Router } from 'express';
import { listActVerSecByIdVer, listActVerSecByIdVerInfoSec, listSectionNoVersion } from '../controllers/VerSection/list';
import { insertActVerSec, insertSectionsByVersion } from '../controllers/VerSection/insert';
import { deleteVerSec } from '../controllers/VerSection/delete';

const versec: Router = Router();
versec.post('/', insertActVerSec);
versec.delete('/:id', deleteVerSec);
versec.get('/id_ver/:id_ver', listActVerSecByIdVer);
versec.get('/infoSection/id_ver/:id_ver', listActVerSecByIdVerInfoSec);
versec.get('/sectionNoVersion/id_ver/:id_ver/id_form/:id_form', listSectionNoVersion);
versec.post('/insertSections/id_ver/:id_ver', insertSectionsByVersion);

export default versec;