import { Router } from 'express';
import { listActOptValues, actOptValByIdOpt, actOptValByIdOptVal, actOptValByIdOptAssets } from '../controllers/OptValue/list';
import { insertActOptValue } from '../controllers/OptValue/insert';
import { deleteOptionValue, actDeleteOptValByIdOpt } from '../controllers/OptValue/delete';
import { updateOptionValue } from '../controllers/OptValue/update';

const optvalue: Router = Router();
optvalue.post('/', insertActOptValue);
optvalue.put('/', updateOptionValue);
optvalue.delete('/:id', deleteOptionValue);
optvalue.delete('/id_opt/:id_opt', actDeleteOptValByIdOpt);
optvalue.get('/', listActOptValues);
optvalue.get('/id_opt/:id_opt', actOptValByIdOpt);
optvalue.get('/id_opt_asts/:id_opt_asts', actOptValByIdOptAssets);
optvalue.get('/id_opt_val/:id_opt_val', actOptValByIdOptVal);
export default optvalue;
