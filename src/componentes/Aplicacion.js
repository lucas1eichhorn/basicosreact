import React, { Component } from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';




class Aplicacion extends Component {
    constructor(props) {
        super();
        //props en el state
        this.state = {
            productos: []
        }
    }

    //cuando el componente esta visible
    componentDidMount() {
        console.log("componente cargado!!");
      //variables
        const productos = [
            { nombre: "Libro", precio: 222 },
            { nombre: "Disco", precio: 300 },
            { nombre: "DVD", precio: 400 },
            { nombre: "Pelicula", precio: 100 },
            { nombre: "Reproductor MP3", precio: 568 }]

        setTimeout(() => {
            this.setState({
                productos: productos
            })
        }, 3000);

    }
    render() {
  
       

        return (
            <div>
                {/* pasamos las props de padre a hijo-> en el mismo componente inline como un atributo
            y dentro del componentete */}
                <Header titulo="Tienda Virtual" />
                {/**lo pasamos por state, sino podemos usar solo la variable productos*/}
                <Productos productos={this.state.productos} />
                <Footer />
            </div>
        )
    }
}

export default Aplicacion;