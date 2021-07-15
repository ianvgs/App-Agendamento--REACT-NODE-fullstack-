import React, { Component } from 'react'
import ax from "../Infra/api";


class Login extends Component {
   
    

    constructor() {
        super()



        this.state = {
            email: '',
            password: '',
            data:''
            
        }
        

    }


    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }


      
    
    

    handleSubmits = async () => {
        

        let info= await ax.post('./login/', {
            email: this.state.email,
            password:this.state.password
        }).then((res) => (res.data))       
                
        this.setState({data:info})        
        console.log(this.state.data)
            
        
                    
       
        
        

    }

    createAgendamento = async () => {
        let res = await ax.post('./atendimentos/',{
            cliente: 'ianporfuncao', servico: 'corte de cabelo', data: '2021-10-01', observacoes: 'nao tenho nenhuma', status: 'aguardando'
        })
        console.log(res)
        
    }




    
    render() {
        return (
            <>


                <div style={{ textAlign: 'center', justifyContent: 'left', width: "100%", marginTop: 100, height: 350 }}>

                    <form target="_blank">




                        <div>
                            <label>E-mail</label><br />
                            <input value={this.state.email} onChange={this.handleEmailChange}></input>
                        </div>


                        <div>
                            <label>Password</label><br />
                            <input type='password'  value={this.state.password} onChange={this.handlePasswordChange}>
                            </input>
                        </div>
                        <button onClick={this.handleSubmits}>Login</button>



                    </form>

                    <div>Ta foda man </div>
                    <button onClick={this.createAgendamento}>criar atendimento</button>

                   { <h1>{this.state.data.message}</h1>}
                    
                    
                    
                   


                </div>



            </>


        )
    }
}

export default Login;
