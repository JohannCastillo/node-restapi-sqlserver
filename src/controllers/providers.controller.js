import { getConnection } from "../database/connection"

export const getProviders = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query("SELECT * FROM PROVEEDOR")
    res.json(result.recordset)
}