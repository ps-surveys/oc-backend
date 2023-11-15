import { ConfigI } from "./cfg";

export default {

    keyDbPostgres: {
        host: "localhost",
        user: "postgres",
        port: 5432,
        database: "organizational_climate",
        password: "root",
        max: 2,
        min: 1,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
    }
}
 


export const DESK_PORT = 49213;

export const secret = "g4nk0B0v1no5";
