import { Component } from "react";
import Character from "../Character";
import FinalTrial from "../FinalTrial";
import FirstTrial from "../FirstTrial";
import Player from "../Player";
import SecondTrial from "../SecondTrial";
import SecretArea from "../SecretArea";
import Student from "../Student";

import "./styles.scss";

export default class Game extends Component {
  state = {
    character: "",
    gamePhase: 0,
    cinematic: false,
    ranking: [],
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

  handlePhase = (interval) => {
    this.handleGamePhase();
    this.toggleCinematic();

    setTimeout(this.toggleCinematic, interval);
  };

  handleRanking = (rank) => {
    this.setState({ ranking: rank });
  };

  restartGame = () => {
    const { toggleGame } = this.props;
    toggleGame();
  };

  render() {
    const {
      firstStudent,
      secondStudent,
      thirdStudent,
      getRandom,
      students,
      voldemort,
    } = this.props;

    const { character, gamePhase, cinematic, ranking } = this.state;

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
          <div className="introPhase">
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
              handlePhase={this.handlePhase}
            />
          </div>
        )}
        {gamePhase === 3 && cinematic && (
          <div className="introPhase">
            <h1>First Task</h1>
            <img
              src="https://i.pinimg.com/originals/51/9e/95/519e95518312baffc8af8c8462d53751.gif"
              alt="dragons"
            ></img>
          </div>
        )}
        {gamePhase === 3 && !cinematic && (
          <div className="gamePhase3">
            <FirstTrial
              getRandom={getRandom}
              firstStudent={firstStudent}
              secondStudent={secondStudent}
              thirdStudent={thirdStudent}
              character={character}
              handlePhase={this.handlePhase}
              handleRanking={this.handleRanking}
            />
          </div>
        )}
        {gamePhase === 4 && cinematic && (
          <div className="introPhase">
            <h1>Second Task</h1>
            <img
              src="https://i.pinimg.com/originals/5f/44/fc/5f44fc6e9aa0556b942657329ac95ef9.gif"
              alt="water-task"
            ></img>
          </div>
        )}
        {gamePhase === 4 && !cinematic && (
          <div className="gamePhase4">
            <SecondTrial
              ranking={ranking}
              character={character}
              getRandom={getRandom}
              handleRanking={this.handleRanking}
              students={students}
              handlePhase={this.handlePhase}
            />
          </div>
        )}
        {gamePhase === 5 && cinematic && (
          <div className="introPhase">
            <h1>Final Task</h1>
            <img
              src="https://uploads.spiritfanfiction.com/fanfics/capitulos/201712/a-profecia-11323557-181220171317.gif"
              alt="Final Task"
            />
          </div>
        )}
        {gamePhase === 5 && !cinematic && (
          <div className="gamePhase5">
            <FinalTrial
              character={character}
              ranking={ranking}
              getRandom={getRandom}
              handleRanking={this.handleRanking}
              restartGame={this.restartGame}
              handlePhase={this.handlePhase}
            />
          </div>
        )}
        {gamePhase === 6 && cinematic && (
          <div className="introPhase">
            <h1>Secret Area</h1>
            <img
              alt="secret area"
              src="https://img.wattpad.com/7f24b513a54f9483e460358eda5dfbd0d3c8b446/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f72614143515a5f3539714e536b413d3d2d3732363238393736312e313561323036326130393638343434393135333236363634353939342e676966"
            />
          </div>
        )}
        {gamePhase === 6 && !cinematic && (
          <div className="gamePhase6">
            <SecretArea
              character={character}
              restartGame={this.restartGame}
              voldemort={voldemort}
            />
          </div>
        )}
      </div>
    );
  }
}
