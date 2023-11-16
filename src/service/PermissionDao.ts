import pool from './database/database'
import { Query } from './database/query'
import { AcsPermission } from './models/Permission'

class AcsPermissionDao {

    public async permissions(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_PERMISSIONS)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: AcsPermission = new AcsPermission()
                obj.idPermis = item.id_permis
                obj.namePermis = item.name_permis
                obj.desPermis = item.des_permis
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async permissionByName(name: string): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_PERMISSION_BY_NAME, [name])
            const rs = rsw.rows
            var obj: AcsPermission = null
            rs.map((item: any) => {
                obj = new AcsPermission()
                obj.idPermis = item.id_permis
                obj.namePermis = item.name_permis
                obj.desPermis = item.des_permis
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async insert(permission: AcsPermission): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_PERMISSION, [permission.namePermis, permission.desPermis])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(permission: AcsPermission): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_PERMISSION, [permission.namePermis, permission.desPermis, permission.idPermis])
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
            await pool.query(Query.DELETE_PERMISSION, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const acsPermissionDao = new AcsPermissionDao
export default acsPermissionDao
