import { Component } from "react";
import "./styles.scss";

export default class Player extends Component {
  colors = {
    Gryffindor: "red",
    Slytherin: "green",
    Hufflepuff: "yellow",
    Ravenclaw: "blue",
  };

  render() {
    const { character, assistant, handlePhase } = this.props;
    return (
      <div id="character-created">
        <div className="" id="player">
          <h2>Your character</h2>
          <div className="player-info">
            <ul>
              <li>
                <label className="type">Name: </label>{" "}
                <label>{character.name}</label>
              </li>
              <li>
                <label className="type">House: </label>{" "}
                <label>{character.house}</label>
              </li>
              <li>
                <label className="type">Gender: </label>{" "}
                <label>{character.gender}</label>
              </li>
              <li>
                <label className="type">Wand: </label>{" "}
                <label>{character.wand.core || "Unknown"}</label>
              </li>
              <li>
                <label className="type">Ancestry: </label>
                <label>{character.ancestry || "Unknown"}</label>
              </li>
            </ul>
          </div>
          <div className="student">
            <img
              src={character.image}
              alt={character.name}
              className={this.colors[character.house]}
            />
          </div>
        </div>
        <div className="assistant">
          <h2>Your assistant</h2>
          <figure>
            <img
              src={assistant.image}
              alt={assistant.name}
              className={this.colors[assistant.house]}
            ></img>
            <figcaption>{assistant.name}</figcaption>
          </figure>
        </div>
        <div
          className="gameButton continueButton"
          onClick={() => handlePhase(2200)}
        ></div>
      </div>
    );
  }
}
