import pool from './database/database'
import { Query } from './database/query'
import { ActQues } from './models/Question';
import actConditionDao from "./QuestionDao";

class ActQuesDao {

    public async questions(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_QUESTIONS)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActQues = new ActQues()
                obj.idQues = item.id_ques
                obj.idSec = item.id_sec
                obj.idOpt = item.id_opt
                obj.nameQues = item.name_ques
                obj.descQues = item.desc_ques
                obj.typeQues = item.type_ques
                obj.infoQues = item.info_ques
                obj.mandatoryQues = item.mandatory_ques
                obj.itemValue = item.item_value
                obj.orderQues = item.order_ques

                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async questionById(idques: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_QUESTION_BY_ID, [idques])
            const rs = rsw.rows
            var list = []
            list = rs
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async questionsByIdSec(idsec: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_QUESTIONS_BY_ID_SEC, [idsec])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActQues = new ActQues()
                obj.idQues = item.id_ques
                obj.idSec = item.id_sec
                obj.idOpt = item.id_opt
                obj.nameQues = item.name_ques
                obj.descQues = item.desc_ques
                obj.typeQues = item.type_ques
                obj.infoQues = item.info_ques
                obj.mandatoryQues = item.mandatory_ques
                obj.itemValue = item.item_value
                obj.orderQues = item.order_ques

                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async questionsByIdSecFill(idsec: number, idversion: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_QUESTIONS_BY_ID_SEC_FILL, [idsec, idversion])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActQues = new ActQues()
                obj.idQues = item.id_ques
                obj.idSec = item.id_sec
                obj.idOpt = item.id_opt
                obj.nameQues = item.name_ques
                obj.descQues = item.desc_ques
                obj.typeQues = item.type_ques
                obj.infoQues = item.info_ques
                obj.mandatoryQues = item.mandatory_ques
                obj.itemValue = item.item_value
                obj.orderQues = item.order_ques

                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async questionsByOrderQuest(idsec: number, idversion: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_QUESTIONS_BY_ORDER_QUES, [idsec, idversion])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActQues = new ActQues()
                obj.idQues = item.id_ques
                obj.idSec = item.id_sec
                obj.idOpt = item.id_opt
                obj.nameQues = item.name_ques
                obj.descQues = item.desc_ques
                obj.typeQues = item.type_ques
                obj.infoQues = item.info_ques
                obj.mandatoryQues = item.mandatory_ques
                obj.itemValue = item.item_value
                obj.orderQues = item.order_ques

                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    /* public async questionsByIdSec(idsec: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_QUESTIONS_BY_ID_SEC, [idsec])
            const rs = rsw.rows
            var list = []
            let jona = []
            let algoloco = []
            list = rs.map((item: any) => {
                

                const obj: ActQues = new ActQues()
                obj.idQues = item.id_ques
                obj.idSec = item.id_sec
                obj.idOpt = item.id_opt
                obj.nameQues = item.name_ques
                obj.descQues = item.desc_ques
                obj.typeQues = item.type_ques
                obj.infoQues = item.info_ques
                obj.mandatoryQues = item.mandatory_ques
                obj.styleQues = item.style_ques
                obj.conditions = []
                this.luismaricon(item.id_ques,(error,res)=>{
                    if (error) {
                         console.log(  error)
                    }
                   console.log(res)
                })

                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    } */

    /* async luismaricon(id: number, callback): Promise<any> {
        let soyunparajito = []
        soyunparajito.push( actConditionDao.conditionsByIdQues(id))
        console.log(soyunparajito);
        callback(soyunparajito)
          //  return  Promise.all( soyunparajito)
    } */

    public async questionsByIdSecNotIn(idsec: number): Promise<any> {
        try {
            var paramtwo = "short_text"
            var paramthree = "notes"
            var paramfour = "cloud_upload"
            var paramfive = "event"
            var rsw: any = await pool.query(Query.SELECT_QUESTIONS_BY_ID_SEC_NOT_IN, [idsec, paramtwo, paramthree, paramfour, paramfive])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ActQues = new ActQues()
                obj.idQues = item.id_ques
                obj.idSec = item.id_sec
                obj.idOpt = item.id_opt
                obj.nameQues = item.name_ques
                obj.descQues = item.desc_ques
                obj.typeQues = item.type_ques
                obj.infoQues = item.info_ques
                obj.mandatoryQues = item.mandatory_ques
                obj.itemValue = item.item_value
                obj.orderQues = item.order_ques

                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async quesByIdSecName(idsec: number, name: string): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_QUESTION_BY_ID_SEC_NAME, [idsec, name])
            const rs = rsw.rows
            var obj: ActQues = null
            rs.map((item: any) => {
                obj = new ActQues()
                obj.idQues = item.id_ques
                obj.idSec = item.id_sec
                obj.idOpt = item.id_opt
                obj.nameQues = item.name_ques
                obj.descQues = item.desc_ques
                obj.typeQues = item.type_ques
                obj.infoQues = item.info_ques
                obj.mandatoryQues = item.mandatory_ques
                obj.itemValue = item.item_value
                obj.orderQues = item.order_ques

            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async quesByOrderQues(idsec: number, order: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_QUESTION_BY_ORDER_QUEST, [idsec, order])
            const rs = rsw.rows
            var obj: ActQues = null
            rs.map((item: any) => {
                obj = new ActQues()
                obj.idQues = item.id_ques
                obj.idSec = item.id_sec
                obj.idOpt = item.id_opt
                obj.nameQues = item.name_ques
                obj.descQues = item.desc_ques
                obj.typeQues = item.type_ques
                obj.infoQues = item.info_ques
                obj.mandatoryQues = item.mandatory_ques
                obj.itemValue = item.item_value
                obj.orderQues = item.order_ques

            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async insert(ques: ActQues): Promise<any> {
        var action = false
        var add_column_rf: string
        var id_ques: number
        var table_name: string
        try {
            const qtn = await pool.query(Query.INSERT_QUESTION, [ques.idSec, ques.idOpt, ques.nameQues,
            ques.descQues, ques.typeQues, ques.infoQues, ques.mandatoryQues, ques.itemValue ? ques.itemValue : null, ques.orderQues])

            id_ques = qtn.rows[0]["id_ques"]
            table_name = "act_section_" + ques.idSec

            // Query to dynamically generate column
            add_column_rf = "ALTER TABLE " + table_name + " ADD COLUMN ques_" + id_ques + " TEXT;"
            await pool.query(add_column_rf, null)

            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(ques: ActQues): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_QUESTION, [ques.idSec, ques.idOpt, ques.nameQues,
            ques.descQues, ques.typeQues, ques.infoQues, ques.mandatoryQues, ques.idQues, ques.itemValue, ques.orderQues])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async delete(id: number, id_sec: number): Promise<any> {
        var action = false
        var drop_table_section: string;
        var table_name: string
        try {
            await pool.query(Query.DELETE_QUESTION, [id])

            const sec = await pool.query(Query.SELECT_SECTION_BY_ID, [id_sec])
            table_name = sec.rows[0]["table_name"];

            // Query to dynamically drop column in section
            drop_table_section = "ALTER TABLE " + table_name + " DROP COLUMN ques_" + id + ";";
            await pool.query(drop_table_section, null);

            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const actQuesDao = new ActQuesDao
export default actQuesDao
