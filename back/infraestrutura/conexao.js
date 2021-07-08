const mysql = require('mysql')

const conexao= mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'agendamentos'
  
})



module.exports = conexao;
