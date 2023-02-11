import { getConnection, sql } from "../database/connection"

export const getProviders = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query("SELECT * FROM PROVEEDOR WHERE BORRADO = 0")
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const insertProvider = async (req, res) => {
    try {
        const { RUC, Proveedor, Descripcion, Direccion, Telefono, Correo } = req.body

        const pool = await getConnection()
        const result = await pool.request()
            .input("RUC", sql.Char, RUC)
            .input("Proveedor", sql.VarChar, Proveedor)
            .input("Descripcion", sql.VarChar, Descripcion)
            .input("Direccion", sql.VarChar, Direccion)
            .input("Telefono", sql.VarChar, Telefono)
            .input("Correo", sql.VarChar, Correo)
            .execute("SP_INSERT_PROVEEDOR")

        res.json({ RUC, Proveedor, Descripcion, Direccion, Telefono, Correo })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const updateProvider = async (req, res) => {
    try {
        const { idProveedor, RUC, Proveedor, Descripcion, Direccion, Telefono, Correo } = req.body
        const pool = await getConnection()
        const result = await pool.request()
            .input("idProveedor", sql.Int, idProveedor)
            .input("RUC", sql.Char, RUC)
            .input("Proveedor", sql.VarChar, Proveedor)
            .input("Descripcion", sql.VarChar, Descripcion)
            .input("Direccion", sql.VarChar, Direccion)
            .input("Telefono", sql.VarChar, Telefono)
            .input("Correo", sql.VarChar, Correo)
            .execute("SP_UPDATE_PROVEEDOR")

        res.json({ RUC, Proveedor, Descripcion, Direccion, Telefono, Correo })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const deleteProvider = async (req, res) => {
    try {
        const { id } = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input("idProveedor", sql.Int, id)
            .execute("SP_DELETE_PROVEEDOR")
        res.status(204)
        res.send("")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const searchProvider = async (req, res) => {
    try {
        const { id } = req.params
        const pool = await getConnection()
        const result = await pool.request()
            .input("idProveedor", sql.Int, id)
            .execute("SP_SEARCH_PROVEEDORxID")
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}