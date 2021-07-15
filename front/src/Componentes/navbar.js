import React, { Component } from 'react';
import { Button } from './button.js';
import { MenuItems } from './MenuItems';
import './navbar.css'
class Navbar extends Component {


    state = {clicked: false}

    handleClick = () =>{
        this.setState({
            clicked: !this.state.clicked
        })
    }




    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Sistema <i className="fa fa-calendar-minus-o" aria-hidden="true"></i></h1>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked?'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>

                        )
                    })}
                    
                </ul>
                <Button ><a href="http://localhost:3000/login">Login</a></Button>
            </nav>

        )



    }
}
export default Navbar;