import {config} from 'dotenv'

config();

export default{
   port: process.env.PORT || 4000,
   dbUser: process.env.DB_USER || 'root',
   dbPassword: process.env.DB_PASSWORD || '',
   dbServer: process.env.DB_SERVER || '127.0.0.1',
   dbDatabase: process.env.DB_DATABASE || 'test',
}