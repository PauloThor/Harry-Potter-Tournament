import { Component } from "react";

import "./styles.scss";
import BlackDragon from "../../assets/black-dragon.jpg";
import BlueDragon from "../../assets/blue-dragon.jpg";
import GreenDragon from "../../assets/green-dragon.jpg";
import RedDragon from "../../assets/red-dragon.jpg";

export default class FirstTrial extends Component {
  state = {
    dragon: "",
    optionChosen: false,
    rankingPhase1: [],
  };

  dragons = {
    0: {
      name: "Hungarian Horntail",
      image: BlackDragon,
      points: 10,
    },
    1: {
      name: "Swedish Short-snout",
      image: BlueDragon,
      points: 3,
    },
    2: {
      name: "Chinese Fireball",
      image: RedDragon,
      points: 5,
    },
    3: {
      name: "Common Welsh Green",
      image: GreenDragon,
      points: 2,
    },
  };

  getDragon = () => {
    const { getRandom } = this.props;
    return this.dragons[getRandom(4)];
  };

  handlePoints = (points) => {
    const {
      getRandom,
      firstStudent,
      secondStudent,
      thirdStudent,
      character,
    } = this.props;

    const chosenDragon = this.getDragon();

    this.setState({ dragon: chosenDragon });
    // const dragon = this.getDragon();

    let updatedFirst = firstStudent;
    let updatedSecond = secondStudent;
    let updatedThird = thirdStudent;
    let updatedCharacter = character;

    updatedCharacter.points = points - chosenDragon.points;
    updatedFirst.points = 10 + getRandom(5);
    updatedSecond.points = 10 + getRandom(5);
    updatedThird.points = 10 + getRandom(5);

    this.setState({
      character: updatedCharacter,
      firstStudent: updatedFirst,
      secondStudent: updatedSecond,
      thirdStudent: updatedThird,
      optionChosen: true,
    });

    this.setState({
      rankingPhase1: [
        character,
        firstStudent,
        secondStudent,
        thirdStudent,
      ].sort((a, b) => b.points - a.points),
    });
  };

  handlePhase4 = () => {
    const { handleRanking, handlePhase } = this.props;
    const { rankingPhase1 } = this.state;

    handlePhase(1400);
    handleRanking(rankingPhase1);
  };

  // ideias: keyframe trocando imagem do dragão, ao clicar no botão tira o id que dá o keyframe e deixa só a imagem do dragão escolhido

  render() {
    const { optionChosen, dragon, rankingPhase1 } = this.state;
    return (
      <>
        {!optionChosen && (
          <div className="options">
            <h2>Task: Steal the egg from the Dragon</h2>
            <p>Which method do you choose?</p>
            <ul>
              <li onClick={() => this.handlePoints(20)}>
                Conjunctivitis curse
              </li>
              <li onClick={() => this.handlePoints(16)}>Bewitched sleep</li>
              <li onClick={() => this.handlePoints(14)}>Transforming spell</li>
              <li onClick={() => this.handlePoints(12)}>Flying Broom</li>
            </ul>
          </div>
        )}
        {optionChosen && (
          <div className="ranking">
            <h2>First Trial: Ranking</h2>
            <figure>
              <h3>Your Enemy</h3>
              <img src={dragon.image} alt={dragon.name} />
              <figcaption>{dragon.name}</figcaption>
            </figure>
            <ul>
              <li>
                <label>{rankingPhase1[0].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhase1[0].points}
                </label>
              </li>
              <li>
                <label>{rankingPhase1[1].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhase1[1].points}
                </label>
              </li>
              <li>
                <label>{rankingPhase1[2].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhase1[2].points}
                </label>
              </li>
              <li>
                <label>{rankingPhase1[3].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhase1[3].points}
                </label>
              </li>
            </ul>
            <div
              className="gameButton continueButton"
              onClick={this.handlePhase4}
            ></div>
          </div>
        )}
      </>
    );
  }
}
