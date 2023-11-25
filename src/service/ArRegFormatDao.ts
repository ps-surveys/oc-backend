import pool from './database/database'
import { Query } from './database/query';
import { ArRegFormat } from './models/ArRegFormat';

class ArRegFormatDao {

    public async reg_formats(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_REG_FORMATS)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: ArRegFormat = new ArRegFormat()
                obj.idRf = item.id_sar
                obj.idWorkplace = item.id_work_area
                obj.idFormat = item.id_survey
                obj.idUser = item.id_user
                obj.idComp = item.id_comp
                obj.initDateRf = item.init_date_sa
                obj.finDateRf = item.fin_date_sa
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async regFormatsByIdWp(idwp: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_REG_FORMAT_BY_ID_WPLACE, [idwp])
            const rs = rsw.rows
            var obj: ArRegFormat = null
            rs.map((item: any) => {
                obj = new ArRegFormat()
                obj.idRf = item.id_sar
                obj.idWorkplace = item.id_work_area
                obj.idFormat = item.id_survey
                obj.idUser = item.id_user
                obj.idComp = item.id_comp
                obj.initDateRf = item.init_date_sa
                obj.finDateRf = item.fin_date_sa
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async reg_formats_filters(data: any): Promise<any> {
        let filters = JSON.parse(data);

        if (filters.id_user == '' && filters.id_wplace == '') {
            if (filters.for_date == 'init') {
                // console.log("SELECT_REPORTS_BY_CFVI");
                var rsw: any = await pool.query(Query.SELECT_REPORTS_BY_CFVI, [filters.id_comp, filters.id_survey, filters.id_sv, filters.init_date, filters.end_date])
            } else if (filters.for_date == 'end') {
                // console.log("SELECT_REPORTS_BY_CFVE");
                var rsw: any = await pool.query(Query.SELECT_REPORTS_BY_CFVE, [filters.id_comp, filters.id_survey, filters.id_sv, filters.init_date, filters.end_date])
            }
        } else if (filters.id_user != '' && filters.id_wplace == '') {
            if (filters.for_date == 'init') {
                // console.log("SELECT_REPORTS_BY_CFVUI");
                var rsw: any = await pool.query(Query.SELECT_REPORTS_BY_CFVUI, [filters.id_comp, filters.id_survey, filters.id_sv, filters.id_user, filters.init_date, filters.end_date])
            } else if (filters.for_date == 'end') {
                // console.log("SELECT_REPORTS_BY_CFVUE");
                var rsw: any = await pool.query(Query.SELECT_REPORTS_BY_CFVUE, [filters.id_comp, filters.id_survey, filters.id_sv, filters.id_user, filters.init_date, filters.end_date])
            }
        } else if (filters.id_user == '' && filters.id_wplace != '') {
            if (filters.for_date == 'init') {
                // console.log("SELECT_REPORTS_BY_CFVWI");
                var rsw: any = await pool.query(Query.SELECT_REPORTS_BY_CFVWI, [filters.id_comp, filters.id_survey, filters.id_sv, filters.id_wplace, filters.init_date, filters.end_date])
            } else if (filters.for_date == 'end') {
                // console.log("SELECT_REPORTS_BY_CFVWE");
                var rsw: any = await pool.query(Query.SELECT_REPORTS_BY_CFVWE, [filters.id_comp, filters.id_survey, filters.id_sv, filters.id_wplace, filters.init_date, filters.end_date])
            }
        } else if (filters.id_user != '' && filters.id_wplace != '') {
            if (filters.for_date == 'init') {
                // console.log("SELECT_REPORTS_BY_CFVUWI");
                var rsw: any = await pool.query(Query.SELECT_REPORTS_BY_CFVUWI, [filters.id_comp, filters.id_survey, filters.id_sv, filters.id_user, filters.id_wplace, filters.init_date, filters.end_date])
            } else if (filters.for_date == 'end') {
                // console.log("SELECT_REPORTS_BY_CFVUWE");
                var rsw: any = await pool.query(Query.SELECT_REPORTS_BY_CFVUWE, [filters.id_comp, filters.id_survey, filters.id_sv, filters.id_user, filters.id_wplace, filters.init_date, filters.end_date])
            }
        }
        
        try {
            const rs = rsw.rows
            var list = [];
            list = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async dataSectionReport(data: any): Promise<any> {
        var fields: string;
        var query: string;
        let params = JSON.parse(data);
        console.log("P: ", params);
        fields = Object.values(params.id_questions).join(',')
        console.log("K: ", fields);

        query = `SELECT asnd.id_acst, asnd.id_section, asnd.id_sar, asnd.creation_date, ${fields}, asn.name_sec FROM act_section_${params.id_sec} asnd INNER JOIN act_section asn ON (asnd.id_section = asn.id_sec) WHERE asnd.id_section = ${params.id_sec} AND asnd.id_sar = ${params.id_sar}`;
        
        try {
            var rsw: any = await pool.query(query)
            const rs = rsw.rows
            var info = [];
            info = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return info
    }

    public async dataSectionReportByPost(data: any): Promise<any> {
        var fields: string;
        var query: string;
        let params = data;
        console.log("P: ", params);
        fields = Object.values(params.id_questions).join(',')
        console.log("K: ", fields);

        query = `SELECT asnd.id_acst, asnd.id_section, asnd.id_sar, asnd.creation_date, ${fields}, asn.name_sec FROM act_section_${params.id_sec} asnd INNER JOIN act_section asn ON (asnd.id_section = asn.id_sec) WHERE asnd.id_section = ${params.id_sec} AND asnd.id_sar = ${params.id_sar}`;
        
        try {
            var rsw: any = await pool.query(query)
            const rs = rsw.rows
            var info = [];
            info = rs;
        } catch (err) {
            console.log(err)
            throw err
        }
        return info
    }

    public async insert(rf: ArRegFormat): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_REG_FORMAT, [rf.idWorkplace, rf.idFormat, 
                rf.idUser, rf.idComp, rf.initDateRf, rf.finDateRf])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(rf: ArRegFormat): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_REG_FORMAT, [rf.idWorkplace, rf.idFormat, 
                rf.idUser, rf.idComp, rf.initDateRf, rf.finDateRf, rf.idRf])
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
            await pool.query(Query.DELETE_REG_FORMAT, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}


const arRegFormatDao = new ArRegFormatDao
export default arRegFormatDao
