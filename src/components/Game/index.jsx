import { Component } from "react";
import Student from "../Student";

import "./styles.scss";

export default class Game extends Component {
  render() {
    const {
      firstStudent,
      secondStudent,
      thirdStudent,
      toggleGame,
    } = this.props;

    return (
      <div>
        <div className="students">
          <Student student={firstStudent} />
          <Student student={secondStudent} />
          <Student student={thirdStudent} />
        </div>
        <button onClick={() => toggleGame()} className="gameButton">
          Tentar Novamente
        </button>
      </div>
    );
  }
}
