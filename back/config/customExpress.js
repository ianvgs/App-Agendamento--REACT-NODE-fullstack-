const express= require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')


module.exports = () =>{

   
        const app = express();

        app.use((req,res,next)=> {
                res.header("Access-Control-Allow-Origin", "http://localhost:3000")
                app.use(cors());
                next();
        })


        //postman urlencoded(key e value)
        app.use(bodyParser.urlencoded({extended:true}))

        //postman raw({"nome":"ianzitao"})
        app.use(bodyParser.json())

        //inclue os modulos da pasta controllers no app junto com express
        consign()
        .include('controllers')
        .into(app)

        return app
}





