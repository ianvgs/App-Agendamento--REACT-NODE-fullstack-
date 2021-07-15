const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config({ path:'../.env'})



const conexao= mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: 'root',
    database: 'agendamentos'
  
})



module.exports = conexao;
