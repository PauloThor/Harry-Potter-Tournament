import { Component } from "react";

import "./styles.scss";

export default class Start extends Component {
  render() {
    return (
      <div>
        <h1>Torneio tribruxo</h1>
        <h3>Clique no botão para encontrar os feiticeiros!</h3>
        <button className="gameButton" onClick={() => this.props.handleStart()}>
          Começar!
        </button>
      </div>
    );
  }
}
