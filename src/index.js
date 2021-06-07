import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Aplicacion from './componentes/Aplicacion';

const titulo= React.createElement("h1",{id:"titulo",className:"encabezado"},"Hola Mundo")

//ReactDOM.render(<App />, document.getElementById('root'));

//que va a imprimir, donde lo pone
ReactDOM.render(<Aplicacion/>, document.getElementById('root'));

serviceWorker.unregister();
