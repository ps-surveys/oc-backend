import pool from './database/database'
import { Query } from './database/query'
import { AcsCompany } from './models/Company';

class AcsCompanyDao {

    public async companies(): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_COMPANIES)
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: AcsCompany = new AcsCompany()
                obj.idComp = item.id_comp
                obj.nameComp = item.name_comp
                obj.nitComp = item.nit_comp
                obj.nameLegalRep = item.name_legal_rep
                obj.identLegalRep = item.ident_legal_rep
                obj.emailComp = item.email_comp
                obj.ciiuComp = item.ciiu_comp
                obj.addressComp = item.address_comp
                obj.phoneComp = item.phone_comp
                obj.numEmployee = item.number_employee
                obj.riskLvlComp = item.risk_level_comp
                obj.logoComp = item.logo_comp
                obj.arlComp = item.arl_comp
                obj.flagAdmin = item.flag_admin
                obj.mainEconomicActivity = item.main_economic_activity
                obj.secEconomicActivity = item.sec_economic_activity
                obj.numEmployeeDep = item.num_employee_dep
                obj.numEmployeeIndep = item.num_employee_indep
                obj.numEmployeeCont = item.num_employee_cont

                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async companyByNit(nit: string): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_COMPANY_BY_NIT, [nit])
            const rs = rsw.rows
            var obj: AcsCompany = null
            rs.map((item: any) => {
                obj = new AcsCompany()
                obj.idComp = item.id_comp
                obj.nameComp = item.name_comp
                obj.nitComp = item.nit_comp
                obj.nameLegalRep = item.name_legal_rep
                obj.identLegalRep = item.ident_legal_rep
                obj.emailComp = item.email_comp
                obj.ciiuComp = item.ciiu_comp
                obj.addressComp = item.address_comp
                obj.phoneComp = item.phone_comp
                obj.numEmployee = item.number_employee
                obj.riskLvlComp = item.risk_level_comp
                obj.logoComp = item.logo_comp
                obj.arlComp = item.arl_comp
                obj.flagAdmin = item.flag_admin
                obj.mainEconomicActivity = item.main_economic_activity
                obj.secEconomicActivity = item.sec_economic_activity
                obj.numEmployeeDep = item.num_employee_dep
                obj.numEmployeeIndep = item.num_employee_indep
                obj.numEmployeeCont = item.num_employee_cont
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return obj
    }

    public async companyById(id: number): Promise<any> {
        try {
            var rsw: any = await pool.query(Query.SELECT_COMPANY_BY_ID, [id])
            const rs = rsw.rows
            var list = []
            list = rs.map((item: any) => {
                const obj: AcsCompany = new AcsCompany()
                obj.idComp = item.id_comp
                obj.nameComp = item.name_comp
                obj.nitComp = item.nit_comp
                obj.nameLegalRep = item.name_legal_rep
                obj.identLegalRep = item.ident_legal_rep
                obj.emailComp = item.email_comp
                obj.ciiuComp = item.ciiu_comp
                obj.addressComp = item.address_comp
                obj.phoneComp = item.phone_comp
                obj.numEmployee = item.number_employee
                obj.riskLvlComp = item.risk_level_comp
                obj.logoComp = item.logo_comp
                obj.arlComp = item.arl_comp
                obj.flagAdmin = item.flag_admin
                obj.mainEconomicActivity = item.main_economic_activity
                obj.secEconomicActivity = item.sec_economic_activity
                obj.numEmployeeDep = item.num_employee_dep
                obj.numEmployeeIndep = item.num_employee_indep
                obj.numEmployeeCont = item.num_employee_cont
                return obj
            })
        } catch (err) {
            console.log(err)
            throw err
        }
        return list
    }

    public async insert(company: AcsCompany): Promise<any> {
        var action = false
        try {
            await pool.query(Query.INSERT_COMPANY, [company.nameComp, company.nitComp, company.nameLegalRep,
            company.identLegalRep, company.emailComp, company.addressComp, company.phoneComp,
            company.numEmployee, company.logoComp, company.flagAdmin,
        ])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }

    public async update(company: AcsCompany): Promise<any> {
        var action = false
        try {
            await pool.query(Query.UPDATE_COMPANY, [company.nameComp, company.nitComp, company.nameLegalRep,
            company.identLegalRep, company.emailComp, company.addressComp, company.phoneComp,
            company.numEmployee, company.logoComp, company.flagAdmin, company.idComp])
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
            await pool.query(Query.DELETE_COMPANY, [id])
            action = true
        } catch (err) {
            action = false
            console.log(err)
            throw err
        }
        return action
    }
}

const acsCompanyDao = new AcsCompanyDao
export default acsCompanyDao