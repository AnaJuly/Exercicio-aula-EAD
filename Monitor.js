import React from 'react'

function Monitor() {
  let polegada = "22p";
}

function Monitor extends React.Component {
  constructor() {
    super();
    this.state = {polegada: "22p", cor:"rosa"};
  }
  render() {
    return <h2>{this.state.polegada}</h2>;
    return <h2> {this.state.cor}</h2>
  }
}
export default Monitor;