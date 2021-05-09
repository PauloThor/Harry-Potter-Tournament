import { Component } from "react";

import "./styles.scss";
import DeathImage from "../../assets/death.png";

export default class SecretArea extends Component {
  state = {
    optionChosen: 0,
    health: 100,
  };

  handleHealth = (damage) => {
    const { health, optionChosen } = this.state;
    let currentHealth = health - damage;

    if (currentHealth <= 0) {
      this.setState({ health: 0, optionChosen: 5 });
    } else {
      this.setState({
        health: health - damage,
        optionChosen: optionChosen + 1,
      });
    }
  };

  render() {
    const { optionChosen, health } = this.state;
    const { voldemort, character, restartGame } = this.props;
    return (
      <>
        {optionChosen === 0 && (
          <div className="options">
            <h2>Secret Task: Survive against Lord Voldemort</h2>
            <div className="healthbar">
              <div style={{ width: health + "%" }}>
                <label>Health</label>
              </div>
            </div>
            <p>Which spell do you cast?</p>
            <ul>
              <li onClick={() => this.handleHealth(40)}>Confundo</li>
              <li onClick={() => this.handleHealth(60)}>Wingardium Leviosa</li>
              <li onClick={() => this.handleHealth(20)}>Expelliarmus</li>
              <li onClick={() => this.handleHealth(30)}>Finite Incantatem</li>
            </ul>
          </div>
        )}
        {optionChosen === 1 && (
          <div className="options">
            <h2>Secret Task: Survive against Lord Voldemort</h2>
            <div className="healthbar">
              <div style={{ width: health + "%" }}>
                <label>Health</label>
              </div>
            </div>
            <p>Which spell do you cast?</p>
            <ul>
              <li onClick={() => this.handleHealth(10)}>Incendio</li>
              <li onClick={() => this.handleHealth(30)}>Immobolus</li>
              <li onClick={() => this.handleHealth(50)}>Lumos</li>
              <li onClick={() => this.handleHealth(20)}>Protego</li>
            </ul>
          </div>
        )}
        {optionChosen === 2 && (
          <div className="options">
            <h2>Secret Task: Survive against Lord Voldemort</h2>
            <div className="healthbar">
              <div style={{ width: health + "%" }}>
                <label>Health</label>
              </div>
            </div>
            <p>Which spell do you cast?</p>
            <ul>
              <li onClick={() => this.handleHealth(0)}>Stupefy</li>
              <li onClick={() => this.handleHealth(30)}>Periculum</li>
              <li onClick={() => this.handleHealth(10)}>Levicorpus</li>
              <li onClick={() => this.handleHealth(20)}>Impedimenta</li>
            </ul>
          </div>
        )}
        {optionChosen === 3 && (
          <div className="gamePhaseSecret">
            <h2>You survived against Lord Voldemort</h2>
            <div className="secretArea">
              <figure>
                <img src={character.image} alt={character.name} />
                <figcaption>{character.name}</figcaption>
              </figure>
              <figure>
                <img src={voldemort.image} alt={voldemort.name} />
                <figcaption>{voldemort.name}</figcaption>
              </figure>
            </div>
            <div
              className="gameButton restartButton"
              onClick={restartGame}
            ></div>
          </div>
        )}
        {optionChosen === 5 && (
          <div className="gamePhaseSecret">
            <h2>Lord Voldemort killed you</h2>
            <div className="secretArea">
              <figure>
                <img src={DeathImage} alt="Death" />
                <figcaption>{character.name} is dead</figcaption>
              </figure>
              <figure>
                <img src={voldemort.image} alt={voldemort.name} />
                <figcaption>{voldemort.name}</figcaption>
              </figure>
            </div>
            <div
              className="gameButton restartButton"
              onClick={restartGame}
            ></div>
          </div>
        )}
      </>
    );
  }
}
