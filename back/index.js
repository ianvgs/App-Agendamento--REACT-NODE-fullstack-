const customExpress = require('./config/customExpress.js')
const conexao=require('./infraestrutura/conexao') //conexao com mysql
const dotenv = require('dotenv')
const Tabelas = require('./infraestrutura/tabelas')


dotenv.config({path:'../.env'})

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else {
        console.log('Conectado com sucesso')

        //se tiver conectado vai criar as tabelas 
        Tabelas.init(conexao)

        //só vai subir o servidor na porta 3000 se a conexao estiver ok
        const app = customExpress();

        app.listen(3001, () => {console.log('porta 3001')})


    }

})



