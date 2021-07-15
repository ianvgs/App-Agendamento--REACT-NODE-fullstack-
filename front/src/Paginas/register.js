import React, { Component } from 'react'
import ax from "../Infra/api";


class Register extends Component {

    constructor() {
        super()



        this.state = {
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        }

    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
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
    handleConfirmPasswordChange = event => {
        this.setState({
            confirmpassword: event.target.value
        })
    }

    

    
    handleSubmits = async () => {
        await ax.post('./register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirmpassword: this.state.confirmpassword
        }).then((res) => {
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }



    render() {
        return (
            <>

                <div style={{ textAlign: 'center', justifyContent: 'left', width: "100%", marginTop: 100, height: 350 }}>

                    <form onSubmit={this.handleSubmits}>

                        <div>
                            <label>Name</label><br />
                            <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                        </div>


                        <div>
                            <label>E-mail</label><br />
                            <input value={this.state.email}  onChange={this.handleEmailChange}></input>
                        </div>


                        <div>
                            <label>Password</label><br />
                            <input type='password' value={this.state.password} onChange={this.handlePasswordChange}>
                            </input>
                        </div>

                        <div>
                            <label>Confirm Password</label><br />
                            <input type='password' value={this.state.confirmpassword} onChange={this.handleConfirmPasswordChange}>
                            </input>
                        </div>




                        <button type="submit">Registrar</button>

                    </form>
                </div>

                <div style={{ textAlign: 'center', justifyContent: 'left', width: "100%", marginTop: 100, height: 350 }}>




                </div>

            </>


        )
    }
}

export default Register;
