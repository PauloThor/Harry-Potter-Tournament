import { Component } from "react";
import Student from "../Student";

import "./styles.scss";

export default class Game extends Component {
  render() {
    const { students, first, second, third, toggleGame } = this.props;
    return (
      <div>
        <div className="students">
          <Student student={students[first]} />
          <Student student={students[second]} />
          <Student student={students[third]} />
        </div>
        <button onClick={() => toggleGame()} className="gameButton">
          Tentar Novamente
        </button>
      </div>
    );
  }
}
