export const TYPE_OPCION = 'Opcion';
/**
 * @apiDefine Opcion
 * @apiParam {Object} Opcion JSON Object
 * @apiParam {string} Opcion.id id de couchbase
 * @apiParam {string} Opcion.type Parametro usado para buscar en couchbase
 * @apiParam {string} Opcion.nombreOpcion Nombre de la opción
 * @apiParam {string} Opcion.codigoOpcion Código de la opción
 */
export class Opcion {
    id?: string;
    type?: string;
    nombreOpcion: string;
    codigoOpcion: string;
}
