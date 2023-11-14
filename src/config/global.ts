import { ConfigI } from "./cfg";

export default {

    keyDbPostgres: {
        host: "localhost",
        user: "postgres",
        port: 5432,
        database: "ats_anova",
        password: "root",
        max: 2,
        min: 1,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
    }
}

export const CONFIG_PROD: ConfigI = {
    database: {
        host: "database-1.c9ltzbmlt5ok.us-east-2.rds.amazonaws.com",
        user: "postgres",
        port: 5432,
        database: "ats_anova_develop",
        password: "P0stGr3s55*.Adm1n",
        max: 2,
        min: 1,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
    }
 };
 


export const DESK_PORT = 49213;

export const secret = "g4nk0B0v1no5";
const env = process.env.NODE_ENV || "development";
export const config = CONFIG_PROD;
