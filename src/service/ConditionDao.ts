import pool from './database/database'
import { Query } from './database/query'
import { ActCondition } from './models/Condition';

class QuestionDao {

    public async conditions(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_CONDITIONS)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActCondition = new ActCondition()
                obj.idCond = item.id_cond
                obj.idQues = item.id_ques
                obj.typeCond = item.type_cond
                obj.operatorCond = item.operator_cond
                obj.valueCond = item.value_cond
                obj.messageCond = item.message_cond
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async conditionsByIdQues(idques: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_CONDITIONS_BY_ID_QUES, [idques])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActCondition = new ActCondition()
                obj.idCond = item.id_cond
                obj.idQues = item.id_ques
                obj.typeCond = item.type_cond
                obj.operatorCond = item.operator_cond
                obj.valueCond = item.value_cond
                obj.messageCond = item.message_cond
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async insert(cond: ActCondition): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_CONDITION, [cond.idQues, cond.typeCond,
            cond.operatorCond, cond.valueCond, cond.messageCond])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(cond: ActCondition): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_CONDITION, [cond.idQues, cond.typeCond, cond.operatorCond,
            cond.valueCond, cond.messageCond, cond.idCond])
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
            await pool.query(Query.DELETE_CONDITION, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const actConditionDao = new QuestionDao
export default actConditionDao
