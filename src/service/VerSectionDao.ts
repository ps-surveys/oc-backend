import pool from './database/database'
import { Query } from './database/query'
import { ActVersionSection } from './models/ActVersionSection';
import { ActSection } from './models/AllSection';

class ActVerSectionDao {

    public async verSecByIdVer(idVersion: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_VER_SECTIONS_BY_ID_VER, [idVersion])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActVersionSection = new ActVersionSection()
                obj.idVerSec = item.id_ver_sec
                obj.idVersion = item.id_version
                obj.idSec = item.id_sec
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async insert(versec: ActVersionSection): Promise<any> {
        var action = false;
        try {
            await pool.query(Query.INSERT_VER_SECTION, [versec.idVersion, versec.idSec]);
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async delete(id: number): Promise<any> {
        var action = false
        try {
            await pool.query(Query.DELETE_VER_SECTION, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async verSecByIdVerInfoSection(idVersion: number): Promise<any> {
        try {
            console.log("ENTRA");
            
            var rsw: any = await pool.query(Query.SELECT_VER_SECTIONS_INFO_BY_ID_VER, [idVersion])
            const rs = rsw.rows
            var list = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async listSectionNoVersion(idVersion: number, idFormat: number): Promise<any> {
        try {            
            var rsw: any = await pool.query(Query.SELECT_SECTIONS_NO_VER, [idVersion, idFormat])
            console.log("rsw: ", rsw);
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

}


const actVerSectionDao = new ActVerSectionDao
export default actVerSectionDao
