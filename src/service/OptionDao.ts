import pool from './database/database'
import { Query } from './database/query'
import { ActOption } from './models/Option';

class ActOptionDao {

    public async options(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_OPTIONS)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActOption = new ActOption()
                obj.idOption = item.id_opt
                obj.nameOption = item.name_opt
                obj.descOption = item.des_opt
                obj.codOption = item.cod_opt
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async optionByName(name: string): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_OPTION_BY_NAME, [name])
            const rs = rsw.rows
            var obj: ActOption = null
            rs.map((item: any) => {
                obj = new ActOption()
                obj.idOption = item.id_opt
                obj.nameOption = item.name_opt
                obj.descOption = item.des_opt
                obj.codOption = item.cod_opt
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async insert(option: ActOption): Promise<any> {
        try {
            const qtn: any = await pool.query(Query.INSERT_OPTION, [option.nameOption, option.descOption, option.codOption])
            const rs = qtn.rows
            var obj: ActOption = null
            rs.map((item: any) => {
                obj = new ActOption()
                obj.idOption = item.id_opt
                obj.nameOption = item.name_opt
                obj.descOption = item.des_opt
                obj.codOption = item.cod_opt
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async update(option: ActOption): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_OPTION, [option.nameOption,
            option.descOption, option.codOption, option.idOption])
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
            await pool.query(Query.DELETE_OPTION, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const actOptionDao = new ActOptionDao
export default actOptionDao
