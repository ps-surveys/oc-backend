import pool from './database/database'
import { Query } from './database/query'
import { ActDependency } from './models/Dependency';

class ActDependencyDao {

    public async dependencies(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_DEPENDENCIES)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActDependency = new ActDependency()
                obj.idDep = item.id_dep
                obj.idQues = item.id_ques
                obj.idSec = item.id_sec
                obj.idQues2 = item.id_ques2
                obj.operatorDep = item.operator_dep
                obj.valueDep = item.value_dep
                obj.orDep = item.or_dep
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async dependenciesByIdQues(idques: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_DEPENDENCY_BY_ID_QUES, [idques])
            const rs = rsw.rows
            var list = []
            list = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async loadQuestionDependency(idques: number, type: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.querySelectQuestionDependency, [idques])
            const rs = rsw.rows
            var list = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        if (list && list.length > 0) {
            console.log('dependencias');
        }
        return list
    }

    public async dependenciesByIdSec(idsec: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_DEPENDENCY_BY_ID_SEC, [idsec])
            const rs = rsw.rows
            var list = []
            list = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async insert(dep: ActDependency): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_DEPENDENCY, [dep.idQues, dep.idSec,
            dep.idQues2, dep.operatorDep, dep.valueDep, dep.orDep])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(dep: ActDependency): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_DEPENDENCY, [dep.idQues, dep.idSec,
            dep.idQues2, dep.operatorDep, dep.valueDep, dep.orDep, dep.idDep])
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
            await pool.query(Query.DELETE_DEPENDENCY, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}

const actDependencyDao = new ActDependencyDao
export default actDependencyDao
