import pool from './database/database'
import { Query } from './database/query'
import { ActSection } from './models/AllSection';

class ActSectionDao {

    public async sections(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_SECTIONS)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActSection = new ActSection()
                obj.idSection = item.id_sec
                obj.nameSection = item.name_sec
                obj.descSection = item.desc_sec
                obj.typeSection = item.type_sec
                obj.tableName = item.table_name

                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async sectionsNotInForm(idform): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_SECTIONS_NOT_IN_FORM, [idform])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActSection = new ActSection()
                obj.idSection = item.id_sec
                obj.nameSection = item.name_sec
                obj.descSection = item.desc_sec
                obj.typeSection = item.type_sec
                obj.tableName = item.table_name

                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async sectionByName(name: string): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_SECTIONS_BY_NAME, [name])
            const rs = rsw.rows
            var obj: ActSection = null
            rs.map((item: any) => {
                obj = new ActSection()
                obj.idSection = item.id_sec
                obj.nameSection = item.name_sec
                obj.descSection = item.desc_sec
                obj.typeSection = item.type_sec
                obj.tableName = item.table_name
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async sectionByIdSec(idsec: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_SECTION_BY_ID, [idsec])
            const rs = rsw.rows
            var obj: ActSection = null
            rs.map((item: any) => {
                obj = new ActSection()
                obj.idSection = item.id_sec
                obj.nameSection = item.name_sec
                obj.descSection = item.desc_sec
                obj.typeSection = item.type_sec
                obj.tableName = item.table_name
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async insert(section: ActSection): Promise<any> {
        var action = false
        var create_table_sections: string;
        var create_index_sections: string;
        var create_index_regformat: string;
        // var insert_table_section: string;
        var table_name: string;
        var id_sec: number;
        // var id_sar: number;
        try {
            const sec = await pool.query(Query.INSERT_SECTION, [section.nameSection,
            section.descSection, section.typeSection, section.tableName])
            id_sec = sec.rows[0]["id_sec"];

            // const rf = await pool.query(Query.INSERT_REG_FORMAT, [null,
            //     null, null, null, null, null])
            // id_sar = rf.rows[0]["id_sar"];

            // Query to dynamically generate table
            create_table_sections = "CREATE TABLE ACT_SECTION_" + id_sec + " (ID_ACST SERIAL not null, ID_SECTION INT4 null, ID_RF INT4 null, CREATION_DATE TIMESTAMP WITH TIME ZONE null default CURRENT_TIMESTAMP, constraint PK_ACT_SECTION_" + id_sec + " primary key (ID_ACST));";
            await pool.query(create_table_sections, null);

            create_index_sections = "CREATE INDEX ACT_SECTION_ACT_SECTION_" + id_sec + "_FK ON ACT_SECTION_" + id_sec + " (ID_SECTION);";
            await pool.query(create_index_sections, null);

            create_index_regformat = "CREATE INDEX ACT_REGISTER_FORMAT_ACT_SECTION_" + id_sec + "_FK ON ACT_SECTION_" + id_sec + " (ID_RF);";
            await pool.query(create_index_regformat, null);

            // insert_table_section = "INSERT INTO ACT_SECTION_" + id_sec + " (ID_SECTION, ID_RF) VALUES (" + id_sec + ", " + id_sar + ") ";
            // await pool.query(insert_table_section, null);

            table_name = "act_section_" + id_sec;
            await pool.query(Query.UPDATE_SECTION_TABLE, [table_name, id_sec]);

            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(section: ActSection): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_SECTION, [section.nameSection, section.descSection,
            section.typeSection, section.tableName, section.idSection])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async delete(id: number): Promise<any> {
        var drop_table_sections: string;
        var action = false
        try {
            await pool.query(Query.DELETE_SECTION, [id])

            // Query to dynamically generate table
            drop_table_sections = "DROP TABLE ACT_SECTION_" + id + ";";
            await pool.query(drop_table_sections, null);

            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const actSectionDao = new ActSectionDao
export default actSectionDao