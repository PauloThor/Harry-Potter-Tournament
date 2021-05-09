import { Component } from "react";

export default class SecondTrial extends Component {
  state = {
    optionChosen: false,
    firstPlayer: this.props.ranking[0],
    secondPlayer: this.props.ranking[1],
    thirdPlayer: this.props.ranking[2],
    fourthPlayer: this.props.ranking[3],
    currentPlayerPosition: this.props.ranking.findIndex(
      (e) => e.name === this.props.character.name
    ),
    rankingPhase2: [],
    friend: "",
  };

  getFriend = () => {
    const { students, getRandom, character } = this.props;
    const { firstPlayer, secondPlayer, thirdPlayer, fourthPlayer } = this.state;

    const championsNames = [
      firstPlayer.name,
      secondPlayer.name,
      thirdPlayer.name,
      fourthPlayer.name,
    ];

    const possibleFriends = students.filter(
      (student) => !championsNames.includes(student.name)
    );

    const chosenFriend = possibleFriends[getRandom(possibleFriends.length)];

    this.setState({ friend: chosenFriend });
  };

  handlePoints = (points) => {
    const { getRandom, ranking } = this.props;
    const { currentPlayerPosition } = this.state;

    const characterPoints = (ranking[currentPlayerPosition].points += points);
    const newRanking = [...this.props.ranking];
    newRanking[0].points += 10 + getRandom(10);
    newRanking[1].points += 10 + getRandom(10);
    newRanking[2].points += 10 + getRandom(10);
    newRanking[3].points += 10 + getRandom(10);

    newRanking[currentPlayerPosition].points = characterPoints;

    this.setState({
      rankingPhase2: newRanking.sort((a, b) => b.points - a.points),
      optionChosen: true,
    });

    this.getFriend();
  };

  handlePhase5 = () => {
    const { handleRanking, handlePhase } = this.props;
    const { rankingPhase2 } = this.state;

    handlePhase(1400);
    handleRanking(rankingPhase2);
  };

  render() {
    const { optionChosen, rankingPhase2, friend } = this.state;
    return (
      <>
        {!optionChosen && (
          <div className="options">
            <h2>Task: Save your friend from the sea creatures</h2>
            <p>Which method do you choose?</p>
            <ul>
              <li onClick={() => this.handlePoints(10)}>Lakeweed</li>
              <li onClick={() => this.handlePoints(12)}>Bubble-Head Charm</li>
              <li onClick={() => this.handlePoints(16)}>Gillyweed</li>
              <li onClick={() => this.handlePoints(18)}>
                Human to shark spell
              </li>
            </ul>
          </div>
        )}
        {optionChosen && (
          <div className="ranking">
            <h2>Second Trial: Ranking</h2>
            <figure>
              <h3>Your friend</h3>
              <img src={friend.image} alt={friend.name} />
              <figcaption>{friend.name}</figcaption>
            </figure>
            <ul>
              <li>
                <label>{rankingPhase2[0].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhase2[0].points}
                </label>
              </li>
              <li>
                <label>{rankingPhase2[1].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhase2[1].points}
                </label>
              </li>
              <li>
                <label>{rankingPhase2[2].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhase2[2].points}
                </label>
              </li>
              <li>
                <label>{rankingPhase2[3].name}</label>
                <label className="rankingNumber">
                  Points: {rankingPhase2[3].points}
                </label>
              </li>
            </ul>
            <div
              className="gameButton continueButton"
              onClick={this.handlePhase5}
            ></div>
          </div>
        )}
      </>
    );
  }
}
