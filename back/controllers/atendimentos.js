const Atendimento = require('../models/atendimentos')
const Register = require('../models/auth')





module.exports = app => {
    app.get('/atendimentos/', (req, res) => {

        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {

        console.log(req.body)
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })





    ///////////////////////////////////////////////////////////$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$






    app.post('/register/', (req, res) => {
        console.log(req.body)
        const registro = req.body
        Register.registra(registro, res)
    })

    

    app.post('/login/', (req, res) => {

        console.log(req.body)        
        const registro = req.body
        Register.login(registro, res)
        
    })

    app.get('/log', (req,res)=>{
        
       res.cookie('jwt','123456');
       res.send(200).json({msg:"ta que ta"})

    });

    app.get('/courses', (req, res) => {
        return res.json([
            {
                id: 1, name: "nodejs"
            },
            {
                id: 2, name: "reacts"
            },
            {
                id: 3, name: "jest"
            },
            {
                id: 4, name: "seinao"
            },
        ])
    })
}