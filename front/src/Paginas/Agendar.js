import React,{Component} from 'react';
import ax from '../Infra/api';





class Agendar extends Component {

    constructor(){
      super();

      ax.get('/').then(res =>{
        console.log(res.data)
      })

      

      this.state={
        cliente:'',
        status:'',
        observacoes: '',
        data:'',
        servico:'',
        
        }

    }


  handleClienteChange = event => {
      this.setState({
          cliente: event.target.value
      })
  }
  handleObservacoesChange = event => {
    this.setState({
      observacoes: event.target.value
    })
  } 
  handleStatusChange = event => {
    this.setState({
        status: event.target.value
    })
  }
  handleServicoChange = event => {
      this.setState({
          servico: event.target.value
      })
  }
  handleDataChange = event => {
      this.setState({
          data:  event.target.value
          
      })
  }

  

  handleSubmit = event => {
        
        
        ax.post('/atendimentos/', {
        cliente: this.state.cliente,
        servico: this.state.servico,
        data: this.state.data,
        observacoes: this.state.observacoes,
        status: this.state.status
      }).then(res=>{
        console.log(res)
      })

      

      
      alert(`Cliente: ${this.state.cliente}, serviço:  ${this.state.servico}, data ${this.state.data} ,status:${this.state.status},observações:${this.state.observacoes}`);     
       
  }




    render(){
    return(
      <>

      <div style={{textAlign:'center',justifyContent:'left', width:"100%", marginTop:100, height:350}}>

            <form  onSubmit={this.handleSubmit}>

            <div>
                <label>Cliente</label><br/>
                <input type='text' value={this.state.cliente} onChange={this.handleClienteChange} />
            </div>
            

            <div>
                <label>Observações</label><br/>
                <textarea value={this.state.observacoes} onChange={this.handleObservacoesChange}></textarea>
            </div>


            <div>
                <label>Servico</label><br/>
                <input type='text' value={this.state.servico} onChange={this.handleServicoChange}>
                </input>
            </div>

            <div>
                <label>Status</label><br/>
                <input type='text' value={this.state.status} onChange={this.handleStatusChange}>
                </input>
            </div>

            <div>
                <label>Dia</label><br/>
                <input type='date' value={this.state.data} onChange={this.handleDataChange}>
                </input>
            </div>

                                  
                                  <button type="submit">Enviar</button>
                
            </form>
            </div>

            <div style={{textAlign:'center',justifyContent:'left', width:"100%", marginTop:100, height:350}}> 

            


            </div>  

      </>

    )
  }
}

export default Agendar;