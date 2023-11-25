import { Router } from 'express';
import { listArRegFormats, arRegFormatsByIdWp, listRfWithFilters, infoSectionReport, infoSectionReportByPost } from '../controllers/SurveyAnswered/list';
import { insertArRegFormat } from '../controllers/SurveyAnswered/insert';
import { deleteRegFormat } from '../controllers/SurveyAnswered/delete';
import { updateRegFormat } from '../controllers/SurveyAnswered/update';

const survey_answered: Router = Router();
survey_answered.post('/', insertArRegFormat);
survey_answered.put('/',updateRegFormat);
survey_answered.delete('/:id', deleteRegFormat);
survey_answered.get('/', listArRegFormats);
survey_answered.get('/id_wp/:id_wp', arRegFormatsByIdWp);
survey_answered.get('/:data', listRfWithFilters);
survey_answered.get('/parameters/:parameters', infoSectionReport);
survey_answered.post('/parameters/', infoSectionReportByPost);
export default survey_answered;