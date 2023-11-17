import pool from './database/database'
import { Query } from './database/query'
import { ActOptionValue } from './models/optValue';

class ActOptionValueDao {

    public async optionValues(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_OPTION_VALUES)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActOptionValue = new ActOptionValue()
                obj.idOptValue = item.id_opt_value
                obj.idOpt = item.id_opt
                obj.nameOptValue = item.name_opt_value
                obj.codOptValue = item.cod_opt_value
                obj.stateOptValue = item.state_opt_value
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async optionValueByName(idopt: number, name: string): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_OPTION_VALUE_BY_ID_OPT_NAME, [idopt, name])
            const rs = rsw.rows
            var obj: ActOptionValue = null
            rs.map((item: any) => {
                obj = new ActOptionValue()
                obj.idOptValue = item.id_opt_value
                obj.idOpt = item.id_opt
                obj.nameOptValue = item.name_opt_value
                obj.codOptValue = item.cod_opt_value
                obj.stateOptValue = item.state_opt_value
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async optionValByIdOpt(idopt: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_OPTION_VALUE_BY_ID_OPT, [idopt])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActOptionValue = new ActOptionValue()
                obj.idOptValue = item.id_opt_value
                obj.idOpt = item.id_opt
                obj.nameOptValue = item.name_opt_value
                obj.codOptValue = item.cod_opt_value
                obj.stateOptValue = item.state_opt_value
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async optionValByIdOptAssets(idopt: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_OPTION_VALUE_BY_ID_OPT_ASSETS, [idopt])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActOptionValue = new ActOptionValue()
                obj.idOptValue = item.id_opt_value
                obj.idOpt = item.id_opt
                obj.nameOptValue = item.name_opt_value
                obj.codOptValue = item.cod_opt_value
                obj.stateOptValue = item.state_opt_value
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async optionValByIdOptVal(idoptval: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_OPTION_VALUE_BY_ID_OPT_VAL, [idoptval])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActOptionValue = new ActOptionValue()
                obj.idOptValue = item.id_opt_value
                obj.idOpt = item.id_opt
                obj.nameOptValue = item.name_opt_value
                obj.codOptValue = item.cod_opt_value
                obj.stateOptValue = item.state_opt_value
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async insert(optvalue: ActOptionValue): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_OPTION_VALUE, [optvalue.idOpt, optvalue.nameOptValue,
            optvalue.codOptValue, optvalue.stateOptValue])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(optvalue: ActOptionValue): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_OPTION_VALUE, [optvalue.idOpt, optvalue.nameOptValue,
            optvalue.codOptValue, optvalue.stateOptValue, optvalue.idOptValue])
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
            await pool.query(Query.DELETE_OPTION_VALUE, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async deleteByIdOpt(idopt: number): Promise<any> {
        var action = false
        try {
            await pool.query(Query.DELETE_OPTION_VALUE_BY_ID_OPT, [idopt])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}

const actOptionValueDao = new ActOptionValueDao
export default actOptionValueDao
