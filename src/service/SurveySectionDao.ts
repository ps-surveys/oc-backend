import pool from "./database/database";
import { Query } from "./database/query";
import { FormatSection } from "./models/SurveySection";

class ActFormatSectionDao {
  public async formatSections(): Promise<any> {
    try {
      var rsw: any = await pool.query(Query.SELECT_FORM_SECTIONS);
      const rs = rsw.rows;
      var list = [];
      list = rs.map((item: any) => {
        const obj: FormatSection = new FormatSection();
        obj.idSec = item.id_sec;
        obj.idFormat = item.id_survey;
        obj.idFs = item.id_ss;
        obj.stateFs = item.state_ss;
        obj.orderFs = item.order_ss;
        return obj;
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
    return list;
  }

  public async formatSectionsByIdForm(idform: number): Promise<any> {
    try {
      var rsw: any = await pool.query(Query.SELECT_FORM_SECTIONS_BY_ID_FORM, [
        idform,
      ]);
      const rs = rsw.rows;
      var list = [];
      list = rs;
    } catch (err) {
      console.log(err);
      throw err;
    }
    return list;
  }

  public async formatSectionsByIdFormFill(
    idform: number,
    idversion: number
  ): Promise<any> {
    try {
      var rsw: any = await pool.query(
        Query.SELECT_FORM_SECTIONS_BY_ID_FORM_FILL,
        [idform, idversion]
      );
      console.log("rsw: ", rsw);
      
      const rs = rsw.rows;
      var list = [];
      list = rs;
    } catch (err) {
      console.log(err);
      throw err;
    }
    return list;
  }

  public async formatSectionsByFormOrder(
    idform: number,
    order: number
  ): Promise<any> {
    try {
      var rsw: any = await pool.query(
        Query.SELECT_FORM_SECTIONS_BY_FORM_ORDER,
        [idform, order]
      );
      const rs = rsw.rows;
      var obj: FormatSection = null;
      rs.map((item: any) => {
        obj = new FormatSection();
        obj.idSec = item.id_sec;
        obj.idFormat = item.id_survey;
        obj.idFs = item.id_ss;
        obj.stateFs = item.state_ss;
        obj.orderFs = item.order_ss;
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
    return obj;
  }

  public async insert(fsection: FormatSection): Promise<any> {
    var action = false;
    try {
      await pool.query(Query.INSERT_FORM_SECTION, [
        fsection.idSec,
        fsection.idFormat,
        fsection.stateFs,
        fsection.orderFs,
      ]);
      action = true;
    } catch (err) {
      action = false;
      console.log(err);
      throw err;
    }
    return action;
  }

  public async update(fsection: FormatSection): Promise<any> {
    var action = false;
    try {
      await pool.query(Query.UPDATE_FORM_SECTION, [
        fsection.idSec,
        fsection.idFormat,
        fsection.stateFs,
        fsection.orderFs,
        fsection.idFs,
      ]);
      action = true;
    } catch (err) {
      action = false;
      console.log(err);
      throw err;
    }
    return action;
  }

  public async delete(id: number): Promise<any> {
    var action = false;
    try {
      await pool.query(Query.DELETE_FORM_SECTION, [id]);
      action = true;
    } catch (err) {
      action = false;
      console.log(err);
      throw err;
    }
    return action;
  }
}

const FormatSectionDao = new ActFormatSectionDao();
export default FormatSectionDao;
