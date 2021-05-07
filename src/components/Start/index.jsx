import { Component } from "react";

import "./styles.scss";
import Title from "../../assets/title.png";

export default class Start extends Component {
  render() {
    return (
      <div className="start">
        <img src={Title} alt="gameTitle"></img>
        <div
          className="gameButton startButton"
          onClick={this.props.handleStart}
        ></div>
      </div>
    );
  }
}
