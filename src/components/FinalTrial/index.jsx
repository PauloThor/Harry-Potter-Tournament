import { Component } from "react";

import "./styles.scss";

export default class FinalTrial extends Component {
  state = {
    optionChosen: 1,
    firstPlayer: this.props.ranking[0],
    secondPlayer: this.props.ranking[1],
    thirdPlayer: this.props.ranking[2],
    fourthPlayer: this.props.ranking[3],
    currentPlayerPosition: this.props.ranking.findIndex(
      (e) => e.name === this.props.character.name
    ),
    rankingPhaseFinal: this.props.ranking,
  };

  handlePoints = (points) => {
    const { getRandom, handleRanking } = this.props;
    const {
      currentPlayerPosition,
      optionChosen,
      rankingPhaseFinal,
    } = this.state;

    const characterPoints = (rankingPhaseFinal[
      currentPlayerPosition
    ].points += points);
    const newRanking = [...rankingPhaseFinal];
    newRanking[0].points += getRandom(10);
    newRanking[1].points += getRandom(10);
    newRanking[2].points += getRandom(10);
    newRanking[3].points += getRandom(10);

    newRanking[currentPlayerPosition].points = characterPoints;

    this.setState({
      rankingPhaseFinal: newRanking.sort((a, b) => b.points - a.points),
      optionChosen: optionChosen + 1,
    });

    handleRanking(rankingPhaseFinal);
  };

  handleSecretArea = () => {
    const { handlePhase } = this.props;

    handlePhase(2000);
  };

  render() {
    const { optionChosen, rankingPhaseFinal } = this.state;
    const { restartGame, character } = this.props;
    return (
      <>
        {optionChosen === 1 && (
          <div className="options">
            <h2>Task: Enter the maze and find the trophy</h2>
            <p>Which path do you choose? (1/4)</p>
            <ul>
              <li onClick={() => this.handlePoints(0)}>First Left</li>
              <li onClick={() => this.handlePoints(10)}>Second Left</li>
              <li onClick={() => this.handlePoints(8)}>First Right</li>
              <li onClick={() => this.handlePoints(4)}>Second Right</li>
            </ul>
          </div>
        )}
        {optionChosen === 2 && (
          <div className="options">
            <h2>Task: Continue through the maze and find the trophy</h2>
            <p>Which path do you choose? (2/4)</p>
            <ul>
              <li onClick={() => this.handlePoints(10)}>First Left</li>
              <li onClick={() => this.handlePoints(10)}>Second Left</li>
              <li onClick={() => this.handlePoints(0)}>First Right</li>
              <li onClick={() => this.handlePoints(2)}>Second Right</li>
            </ul>
          </div>
        )}
        {optionChosen === 3 && (
          <div className="options">
            <h2>Task: Continue through the maze and find the trophy</h2>
            <p>Which path do you choose? (3/4)</p>
            <ul>
              <li onClick={() => this.handlePoints(5)}>First Left</li>
              <li onClick={() => this.handlePoints(2)}>Second Left</li>
              <li onClick={() => this.handlePoints(8)}>First Right</li>
              <li onClick={() => this.handlePoints(10)}>Second Right</li>
            </ul>
          </div>
        )}
        {optionChosen === 4 && (
          <div className="options">
            <h2>Task: Continue through the maze and find the trophy</h2>
            <p>Which path do you choose? (4/4)</p>
            <ul>
              <li onClick={() => this.handlePoints(10)}>First Left</li>
              <li onClick={this.handleSecretArea}>Second Left</li>
              <li onClick={() => this.handlePoints(2)}>First Right</li>
              <li onClick={() => this.handlePoints(4)}>Second Right</li>
            </ul>
          </div>
        )}
        {optionChosen === 5 && rankingPhaseFinal[0].name !== character.name && (
          <div className="ranking">
            <h2>Final Trial: Ranking</h2>
            <figure>
              <h3 className="finalLose">You lose</h3>
              <img src={character.image} alt={character.name} />
              <figcaption>{character.name}</figcaption>
            </figure>
            <ul>
              <li>
                <label>{rankingPhaseFinal[0].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhaseFinal[0].points}
                </label>
              </li>
              <li>
                <label>{rankingPhaseFinal[1].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhaseFinal[1].points}
                </label>
              </li>
              <li>
                <label>{rankingPhaseFinal[2].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhaseFinal[2].points}
                </label>
              </li>
              <li>
                <label>{rankingPhaseFinal[3].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhaseFinal[3].points}
                </label>
              </li>
            </ul>
            <div
              className="gameButton restartButton"
              onClick={restartGame}
            ></div>
          </div>
        )}
        {optionChosen === 5 && rankingPhaseFinal[0].name === character.name && (
          <div className="ranking">
            <h2>Final Trial: Ranking</h2>
            <figure>
              <h3 className="finalWin">You win</h3>
              <img src={character.image} alt={character.name} />
              <figcaption>{character.name}</figcaption>
            </figure>
            <ul>
              <li>
                <label>{rankingPhaseFinal[0].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhaseFinal[0].points}
                </label>
              </li>
              <li>
                <label>{rankingPhaseFinal[1].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhaseFinal[1].points}
                </label>
              </li>
              <li>
                <label>{rankingPhaseFinal[2].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhaseFinal[2].points}
                </label>
              </li>
              <li>
                <label>{rankingPhaseFinal[3].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhaseFinal[3].points}
                </label>
              </li>
            </ul>
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
