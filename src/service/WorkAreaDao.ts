import pool from './database/database'
import { Query } from './database/query'
import { AcsWorkplace } from './models/Workplace';

class AcsWorkplaceDao {

    public async workplaces(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_WORKAREAS)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: AcsWorkplace = new AcsWorkplace()
                obj.idWorkplace = item.id_work_area
                obj.idComp = item.id_comp
                obj.nameWorkplace = item.area_name
                obj.addressWorkplace = item.address_workplace
                obj.phoneWorkplace = item.phone_workplace
                obj.fixed = item.fixed
                obj.riskLvlWorkplace = item.risk_level_workplace
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async workplaceByName(name: string): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_WORKAREA_BY_NAME, [name])
            const rs = rsw.rows
            var obj: AcsWorkplace = null
            rs.map((item: any) => {
                obj = new AcsWorkplace()
                obj.idWorkplace = item.id_work_area
                obj.idComp = item.id_comp
                obj.nameWorkplace = item.area_name
                obj.addressWorkplace = item.address_workplace
                obj.phoneWorkplace = item.phone_workplace
                obj.fixed = item.fixed
                obj.riskLvlWorkplace = item.risk_level_workplace
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async workplacesByIdComp(idcomp): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_WORKAREAS_BY_ID_COMP, [idcomp])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: AcsWorkplace = new AcsWorkplace()
                obj.idWorkplace = item.id_work_area
                obj.idComp = item.id_comp
                obj.nameWorkplace = item.area_name
                obj.addressWorkplace = item.address_workplace
                obj.phoneWorkplace = item.phone_workplace
                obj.fixed = item.fixed
                obj.riskLvlWorkplace = item.risk_level_workplace
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async insert(wplace: AcsWorkplace): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_WORKAREA, [wplace.idComp, wplace.nameWorkplace])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(wplace: AcsWorkplace): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_WORKAREA, [wplace.idComp, wplace.nameWorkplace, wplace.idWorkplace])
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
            await pool.query(Query.DELETE_WORKAREA, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}

const acsWorkplaceDao = new AcsWorkplaceDao
export default acsWorkplaceDao
