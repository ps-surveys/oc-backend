import pool from './database/database'
import { Query } from './database/query'
import { ActsCompFormat } from './models/SurveyAssignment';

class ActsCompFormatDao {

    public async compFormats(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_COMP_FORMATS)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActsCompFormat = new ActsCompFormat()
                obj.idComp = item.id_comp
                obj.idFormat = item.id_survey
                obj.idCf = item.id_sat
                obj.stateCompFor = item.state_comp_sur
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async compFormatsByIdComp(idcomp: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_COMP_FORMAT_BY_ID_COMP, [idcomp, 'BS'])
            const rs = rsw.rows
            var list = []
            list = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async compFormatsByIdCompBio(idcomp: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_COMP_FORMAT_BY_ID_COMP_BIO, [idcomp, 'BS'])
            const rs = rsw.rows
            var list = []
            list = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async compFormatsByIdForm(idform: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_COMP_FORMAT_BY_ID_FORM, [idform])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActsCompFormat = new ActsCompFormat()
                obj.idComp = item.id_comp
                obj.idFormat = item.id_survey
                obj.idCf = item.id_sat
                obj.stateCompFor = item.state_comp_sur
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async compFormatById(idCf: string): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_COMP_FORMAT_BY_ID, [idCf])
            const rs = rsw.rows
            var obj: ActsCompFormat = null
            rs.map((item: any) => {
                obj = new ActsCompFormat()
                obj.idComp = item.id_comp
                obj.idFormat = item.id_survey
                obj.idCf = item.id_sat
                obj.stateCompFor = item.state_comp_sur
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async insert(cf: ActsCompFormat): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_COMP_FORMAT, [cf.idComp, cf.idFormat, cf.stateCompFor])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(cf: ActsCompFormat): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_COMP_FORMAT, [cf.idComp, cf.idFormat,
            cf.stateCompFor, cf.idCf])
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
            await pool.query(Query.DELETE_COMP_FORMAT, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async deleteByIdForm(idform: number): Promise<any> {
        var action = false
        try {
            await pool.query(Query.DELETE_COMP_FORMAT_BY_ID_FORM, [idform])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const actsCompFormatDao = new ActsCompFormatDao
export default actsCompFormatDao
