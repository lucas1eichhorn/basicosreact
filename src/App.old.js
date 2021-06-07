import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  //Sin JSX
  /*
  return (
  React.createElement(
    "div",//elemento
    null,//props y atributos, clases
    "Hola desde el componente")//contenido
     )
  */

  /* 
  return (
     React.createElement(
     "div",//elemento
     null,//props y atributos, clases
     React.createElement("input",{ type: "text", value: "value para el input" }))
    )
*/
  //CON JSX
  const nombre="Lucas"
  const empleado={nombre:"Juan",apellido:"Perez"}
  
  return (
    //<React.Fragment>
    //solo se debe retornar 1 elemento padre (DIV)
    <div className="contenedor">
      <h1 className="mayusculas">Aprendiendo ReactJS</h1>
      <p>Hola mundo { 2+2}: {nombre}</p>
      <p>Empleado:</p>
      <p>{empleado.nombre}</p>
      <p>{empleado.apellido}</p>
      </div>
   // </React.Fragment>
  )

}

export default App;
