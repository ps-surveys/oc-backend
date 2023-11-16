import pool from './database/database'
import { Query } from './database/query'
import { AcsPermisRol } from './models/PermisRole'

class AcsPermisRolDao {

    public async permissionsRol(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_PERMISSIONS_ROL)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: AcsPermisRol = new AcsPermisRol()
                obj.idProf = item.id_role
                obj.idPermis = item.id_permis
                obj.idPermisRol = item.id_permis_role
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async permissionsRolByIdProf(idprof: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_PERMISSION_ROL_BY_ID_PROF, [idprof])
            const rs = rsw.rows
            var list_asign = []
            list_asign = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return list_asign
    }

    public async permissionsRolByIdProfPermis(idprof: number, idpermis: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_PERMISSION_ROL_BY_ID_PROF_PERMIS, [idprof, idpermis])
            const rs = rsw.rows
            var obj: AcsPermisRol = null
            rs.map((item: any) => {
                obj = new AcsPermisRol()
                obj.idProf = item.id_role
                obj.idPermis = item.id_permis
                obj.idPermisRol = item.id_permis_role
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async insert(permisrol: AcsPermisRol): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_PERMISSION_ROL, [permisrol.idProf, permisrol.idPermis])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(permisrol: AcsPermisRol): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_PERMISSION_ROL, [permisrol.idProf, permisrol.idPermis, permisrol.idPermisRol])
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
            await pool.query(Query.DELETE_PERMISSION_ROL, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async deleteByIdProf(idprof: number): Promise<any> {
        var action = false
        try {
            await pool.query(Query.DELETE_PERMISSION_ROL_BY_ID_PROF, [idprof])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const acsPermisRolDao = new AcsPermisRolDao
export default acsPermisRolDao
