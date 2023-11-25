import pool from './database/database'
import { Query } from './database/query'
import { ActVersionQuestion } from './models/ActVersionQuestion';
import { ActQues } from './models/Question';

class ActVerQuestionDao {

    public async verQuesByIdVer(idVersion: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_VER_QUESTIONS_BY_ID_VER, [idVersion])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActVersionQuestion = new ActVersionQuestion()
                obj.idVerQues = item.id_ver_ques
                obj.idVersion = item.id_version
                obj.idQues = item.id_ques
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async insert(verques: ActVersionQuestion): Promise<any> {
        var action = false;
        try {
            await pool.query(Query.INSERT_VER_QUESTION, [verques.idVersion, verques.idQues]);
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
            await pool.query(Query.DELETE_VER_QUESTION, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }


    public async listActVerQuesByIdVerInfoSec(idVersion: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_VER_QUESTION_INFO_BY_ID_VER, [idVersion])
            const rs = rsw.rows
            var list = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async listQuesNoVersion(idVersion: number, idSec: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_QUESTIONS_NO_VER, [idSec, idVersion])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActQues = new ActQues()
                obj.idQues = item.id_ques
                obj.nameQues = item.name_ques
               /* obj.descSection = item.desc_sec
                obj.typeSection = item.type_sec
                obj.tableName = item.table_name */
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

}


const actVerQuestionDao = new ActVerQuestionDao
export default actVerQuestionDao
