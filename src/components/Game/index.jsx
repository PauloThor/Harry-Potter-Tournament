import { Component } from "react";
import Character from "../Character";
import Player from "../Player";
import Student from "../Student";

import "./styles.scss";

export default class Game extends Component {
  state = {
    character: "",
    gamePhase: 0,
    cinematic: false,
  };

  chosenStudents = [
    this.props.firstStudent.name,
    this.props.secondStudent.name,
    this.props.thirdStudent.name,
  ];

  remainingStudents = this.props.students.filter(
    (student) => !this.chosenStudents.includes(student.name)
  );

  chooseCharacter = (event) => {
    let chosen = event.target.alt;
    this.remainingStudents.forEach((student, i) => {
      if (student.name === chosen) {
        this.setState({ character: this.remainingStudents[i] });
      }
    });
    this.handleGamePhase();
    this.toggleCinematic();

    setTimeout(this.toggleCinematic, 2200);
  };

  handleGamePhase = () => {
    const { gamePhase } = this.state;
    this.setState({ gamePhase: gamePhase + 1 });
  };

  toggleCinematic = () => {
    const { cinematic } = this.state;
    this.setState({ cinematic: !cinematic });
  };

  handlePhase3 = () => {
    this.handleGamePhase();
    this.toggleCinematic();

    setTimeout(this.toggleCinematic, 2200);
  };

  render() {
    const {
      firstStudent,
      secondStudent,
      thirdStudent,
      toggleGame,
    } = this.props;

    const { character, gamePhase, cinematic } = this.state;

    return (
      <div>
        {gamePhase === 0 && (
          <div className="gamePhase0">
            <h2>These are the 3 chosen champions!</h2>
            <div className="students">
              <Student student={firstStudent} />
              <Student student={secondStudent} />
              <Student student={thirdStudent} />
            </div>
            <div
              className="gameButton playButton"
              onClick={this.handleGamePhase}
            ></div>
          </div>
        )}
        {gamePhase === 1 && (
          <div className="gamePhase1">
            <h2>Choose your character!</h2>
            <Character
              remainingStudents={this.remainingStudents}
              chooseCharacter={this.chooseCharacter}
            />
          </div>
        )}
        {gamePhase === 2 && cinematic && (
          <div className="introPhase2">
            <h1>Huh?! Another champion?!</h1>
            <img
              src="https://i.pinimg.com/originals/81/e8/9f/81e89f5fb9e53742b7e9a109cc53baf9.gif"
              alt="goblet"
            ></img>
          </div>
        )}
        {gamePhase === 2 && !cinematic && (
          <div className="gamePhase2">
            <Player
              character={character}
              assistant={this.props.assistant}
              handlePhase3={this.handlePhase3}
            />
          </div>
        )}
        {gamePhase === 3 && cinematic && <div className="gamePhase3"></div>}
      </div>
    );
  }
}
