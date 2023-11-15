import pool from './database/database'
import { Query } from './database/query'
import { AcsProfile } from './models/AcsProfile'

class AcsProfileDao {

    public async profiles(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_PROFILES)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: AcsProfile = new AcsProfile()
                obj.idProf = item.id_role
                obj.nameProf = item.name_role
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async profileByName(name: string): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_PROFILE_BY_NAME, [name])
            const rs = rsw.rows
            var obj: AcsProfile = null
            rs.map((item: any) => {
                obj = new AcsProfile()
                obj.idProf = item.id_role
                obj.nameProf = item.name_role
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async insert(profile: AcsProfile): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_PROFILE, [profile.nameProf])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(profile: AcsProfile): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_PROFILE, [profile.nameProf, profile.idProf])
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
            await pool.query(Query.DELETE_PROFILE, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const acsProfileDao = new AcsProfileDao
export default acsProfileDao
