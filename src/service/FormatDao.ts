import pool from "./database/database";
import { Query } from "./database/query";
import { Format } from "./models/Format";

class ActFormatDao {
  public async formats(): Promise<any> {
    try {
      var rsw: any = await pool.query(Query.SELECT_FORMATS);
      const rs = rsw.rows;
      var list = [];
      list = rs.map((item: any) => {
        const obj: Format = new Format();
        obj.idFormat = item.id_format;
        obj.idUser = item.id_user;
        obj.nameFormat = item.name_format;
        obj.descFormat = item.desc_format;
        obj.typeFormat = item.type_format;
        obj.codFormat = item.cod_format;
        obj.issueDate = item.issue_date;

        return obj;
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
    return list;
  }

  public async formatByName(name: string, cod: string): Promise<any> {
    try {
      var rsw: any = await pool.query(Query.SELECT_FORMAT_BY_NAME, [name, cod]);
      const rs = rsw.rows;
      var obj: Format = null;
      rs.map((item: any) => {
        obj = new Format();
        obj.idFormat = item.id_format;
        obj.idUser = item.id_user;
        obj.nameFormat = item.name_format;
        obj.descFormat = item.desc_format;
        obj.typeFormat = item.type_format;
        obj.codFormat = item.cod_format;
        obj.issueDate = item.issue_date;
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
    return obj;
  }

  public async formatById(idForm: number): Promise<any> {
    try {
      var rsw: any = await pool.query(Query.SELECT_FORMAT_BY_ID, [idForm]);
      const rs = rsw.rows;
      var obj: Format = null;
      rs.map((item: any) => {
        obj = new Format();
        obj.idFormat = item.id_format;
        obj.idUser = item.id_user;
        obj.nameFormat = item.name_format;
        obj.descFormat = item.desc_format;
        obj.typeFormat = item.type_format;
        obj.codFormat = item.cod_format;
        obj.issueDate = item.issue_date;
        // obj.idVersion = item.id_version
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
    return obj;
  }

  public async formatByIdRf(idForm: number): Promise<any> {
    try {
      var rsw: any = await pool.query(Query.SELECT_FORMAT_BY_ID_RF, [idForm]);
      const rs = rsw.rows;
      var obj: Format = null;
      rs.map((item: any) => {
        obj = new Format();
        obj.idFormat = item.id_format;
        obj.idUser = item.id_user;
        obj.nameFormat = item.name_format;
        obj.descFormat = item.desc_format;
        obj.typeFormat = item.type_format;
        obj.codFormat = item.cod_format;
        obj.issueDate = item.issue_date;
        obj.idVersion = item.id_version;
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
    return obj;
  }

  public async insert(format: Format): Promise<any> {
    var action = false;
    var add_first_version: string;
    var id_format: number;
    try {
      const form = await pool.query(Query.INSERT_FORMAT, [
        format.idUser,
        format.nameFormat,
        format.descFormat,
        format.typeFormat,
        format.codFormat,
        format.issueDate,
      ]);
      id_format = form.rows[0]["id_format"];

      add_first_version =
        "INSERT INTO ACT_VERSION (id_format, date_created, cod_version, state_ver, version) VALUES (" +
        id_format +
        ", '" +
        format.issueDate +
        "', '" +
        format.codFormat +
        "', 'true', 1);";
      await pool.query(add_first_version, null);

      action = true;
    } catch (err) {
      action = false;
      console.log(err);
      throw err;
    }
    return action;
  }

  public async update(format: Format): Promise<any> {
    var action = false;
    try {
      await pool.query(Query.UPDATE_FORMAT, [
        format.idUser,
        format.nameFormat,
        format.descFormat,
        format.typeFormat,
        format.codFormat,
        format.issueDate,
        format.idFormat,
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
      await pool.query(Query.DELETE_FORMAT, [id]);
      action = true;
    } catch (err) {
      action = false;
      console.log(err);
      throw err;
    }
    return action;
  }
}

const FormatDao = new ActFormatDao();
export default FormatDao;
