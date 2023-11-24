import { Router } from 'express';
import { listActSections, actSectionsNotInForm, actSectionById } from '../controllers/AllSection/list';
import { insertActSection } from '../controllers/AllSection/insert';
import { deleteSection } from '../controllers/AllSection/delete';
import { updateSection } from '../controllers/AllSection/update';

const section: Router = Router();
section.post('/', insertActSection);
section.put('/', updateSection);
section.delete('/:id', deleteSection);
section.get('/', listActSections);
section.get('/id_form/:id_form', actSectionsNotInForm);
section.get('/id_sec/:id_sec', actSectionById);
export default section;