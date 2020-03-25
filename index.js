import React, { Component } from 'react';
import { render } from 'react-dom';
import Computador from './Computador';
import './style.css';


function Monitor(){
  let polegada = "22p";
  let cor = "rosa";
  return (<div> <h2> Meu monitor! </h2>
  <h3>Polegada: {polegada} </h3>
  <h3>cor: {cor} </h3>
   </div> )
}

class App extends Component {
  constructor() {
    super();
    this.state = { 
     memoria: "16g", processador: "intel", hd: "120g"
    };
  }

  render() {
    return (
        
      <div>
     
      <Computador/>


        <Monitor/>
        
      
       <p>
         Muito trabalhoso esse tema 
      </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
