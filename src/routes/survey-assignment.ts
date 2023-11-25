import { Router } from 'express';
import { listActsCompFormats, actsCompFormatsByIdComp, actsCompFormatsByIdForm, actsCompFormatById, actsCompFormatsByIdCompBio } from '../controllers/SurveyAssignment/list';
import { insertActsCompFormat } from '../controllers/SurveyAssignment/insert';
import { deleteCompFormat, deleteCompFormatByIdForm } from '../controllers/SurveyAssignment/delete';
import { updateCompFormat } from '../controllers/SurveyAssignment/update';

const compformat: Router = Router();
compformat.post('/', insertActsCompFormat);
compformat.put('/', updateCompFormat);
compformat.delete('/:id', deleteCompFormat);
compformat.delete('/id_form/:id_form', deleteCompFormatByIdForm);
compformat.get('/', listActsCompFormats);
compformat.get('/id_comp/:id_comp', actsCompFormatsByIdComp);
compformat.get('/biosec/:id_comp', actsCompFormatsByIdCompBio);
compformat.get('/id_form/:id_form', actsCompFormatsByIdForm);
compformat.get('/id_sat/:id_sat', actsCompFormatById);
export default compformat;