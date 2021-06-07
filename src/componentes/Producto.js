import React, { Component } from 'react';


class Producto extends Component {
    render() {
        const {nombre,precio}=this.props.producto;
        return (
            <div>
               
                <h1> Desde Producto:</h1>
                <h2>{nombre}</h2>
                <p>Precio:$ {precio}</p>
             {console.log(this.props.producto)}
            </div>
        )
    }
}

export default Producto;