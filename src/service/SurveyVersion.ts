import pool from './database/database'
import { Query } from './database/query'
import { ActVersion } from './models/SurveyVersion';

class ActVersionDao {

    public async versionsByIdForm(idForm: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_VERSIONS_BY_ID_FORM, [idForm])
            const rs = rsw.rows
            var list = [];
            list = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async versionsByIdFormCodVer(idForm: number, codVer: string, ver: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_VERSION_BY_ID_FORM_COD_VER, [idForm, codVer, ver])
            const rs = rsw.rows
            var obj: ActVersion = null
            rs.map((item: any) => {
                obj = new ActVersion()
                obj.idFormat = item.id_survey
                obj.idVersion = item.id_sv
                obj.dateCreated = item.creation_date
                obj.codVersion = item.cod_sv
                obj.stateVersion = item.state_sv
                obj.version = item.version
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async versionsByIdFormCodVerWhenUpdate(idVersion: number, idForm: number, codVer: string, ver: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_VERSION_BY_ID_FORM_COD_VER_WHEN_UPDATE, [idForm, codVer, ver, idVersion])
            const rs = rsw.rows
            var obj: ActVersion = null
            rs.map((item: any) => {
                obj = new ActVersion()
                obj.idFormat = item.id_survey
                obj.idVersion = item.id_sv
                obj.dateCreated = item.creation_date
                obj.codVersion = item.cod_sv
                obj.stateVersion = item.state_sv
                obj.version = item.version
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async versionById(idVer: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_VERSION_BY_ID, [idVer])
            const rs = rsw.rows
            var obj: ActVersion = null
            rs.map((item: any) => {
                obj = new ActVersion()
                obj.idFormat = item.id_survey
                obj.idVersion = item.id_sv
                obj.dateCreated = item.creation_date
                obj.codVersion = item.cod_sv
                obj.stateVersion = item.state_sv
                obj.version = item.version
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async insert(version: ActVersion): Promise<any> {
        var action = false;
        try {
            await pool.query(Query.INSERT_VERSION, [version.idFormat, version.dateCreated,
            version.codVersion, version.stateVersion, version.version]);
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(version: ActVersion): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_VERSION, [version.idFormat, version.dateCreated,
            version.codVersion, version.stateVersion, version.version, version.idVersion])
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
            await pool.query(Query.DELETE_VERSION, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const atVersionDao = new ActVersionDao
export default atVersionDao
