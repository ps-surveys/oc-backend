export const TYPE_VALOR_OPCION = 'ValorOpcion';
/**
 * @apiDefine ValorOpcion
 * @apiParam {Object} ValorOpcion JSON Object
 * @apiParam {string} ValorOpcion.id id de couchbase
 * @apiParam {string} ValorOpcion.type Parametro usado para buscar en couchbase
 * @apiParam {string} ValorOpcion.codValOpt Código del valor
 * @apiParam {string} ValorOpcion.nameValOpt Nombre del valor
 * @apiParam {string} ValorOpcion.opcion id de la opción a la que pertenece
 * @apiParam {string} ValorOpcion.state Estado del valor 
 */
export class ValorOpcion {
    id?: string;
    type?: string;
    codValOpt: string;
    nameValOpt: string;
    opcion: String;
    state: Boolean
}
