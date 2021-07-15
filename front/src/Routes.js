import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Agendar from './Paginas/Agendar';
import BuscarTodos from './Paginas/buscarTodos';
import Login from './Paginas/login';
import Register from './Paginas/register';
import Navbar from '../src/Componentes/navbar'





function Routes ()
 {
    return(
        <BrowserRouter>
        <Navbar/>
        <Switch>

            <Route path="/" exact component={Agendar} />
            <Route path="/buscartodos" component={BuscarTodos} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
         
            
            
            
        </Switch>
        </BrowserRouter>
    )

};

export default Routes;


