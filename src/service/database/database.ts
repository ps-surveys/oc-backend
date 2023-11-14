/**
 * crea pool de conexiones para postgres
 */

const pg = require('pg')
import keys from '../../config/global';
const pool = new pg.Pool(keys.keyDbPostgres);

export default pool;