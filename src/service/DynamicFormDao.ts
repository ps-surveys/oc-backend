import pool from './database/database'
import { Query } from './database/query'

class ActDynamicFormDao {

    public async insert(data: any): Promise<any> {
        console.log("data: ", data);
        
        var action = false
        var table_name: string;
        var id_format: number;
        var id_workplace:number;
        var id_user: number;
        var id_comp: number;
        var id_ver: string;
        var id_rf: number;
        var insert_section_table: string;
        var keys: string;
        var values: string;
        var idsec: number;
        try {
            id_workplace = data.registerFormat['idWorkplace'];
            delete data['idWorkplace'];
            id_format = data.registerFormat['idFormat'];
            delete data['idFormat'];
            id_user = data.registerFormat['idUser'];
            delete data['idUser'];
            id_comp = data.registerFormat['idComp'];
            delete data['idComp'];
            id_ver = data.registerFormat['idVersion'];
            delete data['idVersion'];


            const rf = await pool.query(Query.INSERT_REG_FORMAT, [id_workplace,
                id_format, id_user, id_comp, id_ver, data.registerFormat['initDateRf'], data.registerFormat['finDateRf']])
                console.log("rf: ", rf);
                
            id_rf = rf.rows[0]["id_sad"];
            
            data.sections.forEach(async (section) => {
                console.log(section['ques_7'])
                table_name = section['tableName'];
                delete section['tableName'];

                idsec = section['idSec'];
                delete section['idSec'];

                keys = Object.keys(section).join(',')
                values = Object.values(section).map(item => `'${item}'`).join(',')

                console.log("table_name: ", table_name);
                console.log("keys: ", keys);
                console.log("idsec: ", idsec);
                console.log("id_rf: ", id_rf);
                console.log("values: ", values);
                
                insert_section_table = `INSERT INTO ${table_name} (id_section, id_rf, ${keys}) VALUES ( ${idsec}, ${id_rf}, ${values} )`;
                console.log("query: ", insert_section_table);

                const res = await pool.query(insert_section_table, null);
            });

            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}

const actDynamicFormDao = new ActDynamicFormDao
export default actDynamicFormDao