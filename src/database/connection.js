import sql from 'mssql'

const dbSettings = {
    user: 'johann',
    password: 'password',
    server: 'localhost',
    database: 'EMPRESA_LIMPIEZA',
    options: {
        encrypt: true,
        trustServerCertificate: true
    } 
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.log(error)
    }
}
