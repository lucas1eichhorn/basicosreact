import React, {Component} from 'react';
//Class Component
/*
class Header extends Component {
    render(){
        return(
            <h1>Nombre del Sitio</h1>
        )
    }
}*/

//Functional Component - Statless
//en props vienen la props pasadas desde el componente padre Aplicacion
const Header = (props)=> {

        return(
            <h1>{props.titulo}</h1>
        )
    
}
export default Header;
