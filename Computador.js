
import React from 'react'
class Computador extends React.Component {
  constructor() {
    super();
    this.state = {memoria: "16g",  processador: "intel" , hd:"120g" };

  }
  render() {
    return <div><h2>Memória: {this.state.memoria}</h2>
    <h2>processador: {this.state.processador}</h2>
    <h2>hd: {this.state.hd}</h2>
    </div>
  }
}
 export default Computador;



