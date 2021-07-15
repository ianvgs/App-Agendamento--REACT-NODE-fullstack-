const conexao = require('../infraestrutura/conexao')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
import {cookies} from 'cookie-parser'



class Register {
    

    registra(registro, res) {

        const name = registro.name;
        const email = registro.email;
        const password = registro.password;
        const confirmpassword = registro.confirmpassword;


        conexao.query('SELECT email FROM users WHERE email = ?', [email], async (erro, resultados) => {


            if (erro) {
                res.status(400).json(erro)
                return
            }

            if (resultados.length > 0) {
                res.status(400).json({ "message": "email ja cadastrado" })
                return

            } else if (password !== confirmpassword) {
                res.status(400).json({ "message": "passwords nao batem" })
                return
            }


            let hashedPassword = await bcrypt.hash(password, 8)

            let infos = { name: name, email: email, password: hashedPassword };



            conexao.query('INSERT INTO users SET ?', infos, (erro, resultados) => {

                if (erro) {
                    res.status(400).json(erro)
                    return
                } else {
                    res.status(200).json(resultados)
                    return
                };
            })
        })

    }



    login(registro, res) {


        const email = registro.email;
        const password = registro.password;
        const sql = 'SELECT * FROM users WHERE email = ?';

        conexao.query(sql, [email], (erro, resultados) => {

            if (erro) {
                res.status(400).json(erro)
                
            }
            if (resultados.length < 1) {
                res.status(401).json({ msg: "email errado" })
                return
                
            }


            bcrypt.compare(password, resultados[0].password, (erro, result) => {

                if (erro) {
                    res.status(400).json(error);                    
                }
                if (result) {
                    
                    let token =  jwt.sign({
                        user_id: resultados[0].id,
                        token: true
                    }, "senha", 
                    {
                        subject: resultados[0].email,
                        expiresIn: "20s"
                    });

                    res.cookies("jwt", token)
                    res.status(201).json({ "message": "usuario autenticado", "token": token })
                    
                    return
                    
                    
                } 
                  return  res.status(400).json({msg:"senha invalida"})
                
            });


        });
    }
}



module.exports = new Register
