import { Component } from "react";
import "./styles.scss";

import colors from "../Student/index";

export default class Player extends Component {
  colors = {
    Gryffindor: "red",
    Slytherin: "green",
    Hufflepuff: "yellow",
    Ravenclaw: "blue",
  };

  render() {
    const { character } = this.props;
    return (
      <div className="" id="player">
        <div>
          <label>Name: {character.name}</label>
          <label>House: {character.house}</label>
          <label>Gender: {character.gender}</label>
          <label>Wand: {character.wand.core}</label>
          <label>Birth: {character.dateOfBirth}</label>
        </div>
        <div className="student">
          <img
            src={character.image}
            alt={character.name}
            className={this.colors[character.house]}
          />
        </div>
      </div>
    );
  }
}
