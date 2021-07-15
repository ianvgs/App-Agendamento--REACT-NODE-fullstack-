import ax from "../Infra/api";
import React, { Component } from "react";


class BuscarTodos extends Component{
    state= {
       agendamentos:[]
    }
    
    
    
    
    constructor(){   
        super();
        this.listarTodos();
        

        
    }

    
    createAgendamento = async () => {
        let res = await ax.post('./atendimentos/',{
            cliente: 'ianporfuncao', servico: 'corte de cabelo', data: '2021-10-01', observacoes: 'nao tenho nenhuma', status: 'aguardando'
        })
        console.log(res)
        this.listarTodos();
    }

    deleteAgendamento = async (id) => {
        let data = await ax.delete(`./atendimentos/${id}`)
        console.log(data)    
    }

    

    listarTodos = async () => {
        
        let data = await ax.get('./atendimentos/').then( ({data}) => data);
        this.setState({ agendamentos: data})
        
        
    }
    componentDidMount() {
        this.listarTodos(this.state.agendamentos);
     }


    

    render(){




        return(

            <div style={{textAlign:'center',justifyContent:'left', width:"100%", marginTop:100, height:350}}>
                <form onSubmit={this.handleSubmit}>

                
                {this.state.agendamentos.map(agendamento => 
                <h1 key={agendamento.id}>{agendamento.cliente}




                <button onClick={() => this.deleteAgendamento(agendamento.id)}>x</button>
                </h1>)}


                <button onClick={this.createAgendamento}>criar agendamento</button>
                <button onClick={this.listarTodos}>Listar todos</button>
                <div className="res"></div>

                

                

                </form>
            </div>

        )
    }
}

export default BuscarTodos;