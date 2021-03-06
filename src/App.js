import { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import Start from "./components/Start";

class App extends Component {
  state = {
    students: [],
    staff: [],
    gameStarted: false,
    firstStudent: "",
    secondStudent: "",
    thirdStudent: "",
    assistant: "",
    all: "",
    voldemort: "",
  };

  toggleGame = () => {
    const { gameStarted } = this.state;

    this.setState({ gameStarted: !gameStarted });
  };

  handleStart = () => {
    this.toggleGame();
    this.handleRandom();
  };

  componentDidMount() {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) =>
        this.setState({ students: response, loading: false })
      );

    fetch("https://hp-api.herokuapp.com/api/characters/staff")
      .then((response) => response.json())
      .then((response) => this.setState({ staff: response }));

    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          voldemort: response.find((e) => e.name === "Lord Voldemort"),
        })
      );
  }

  getRandom = (size) => {
    return Math.floor(Math.random() * size);
  };

  getHouse = (house) => {
    return this.state.students.filter((student) => student.house === house);
  };

  handleRandom = () => {
    const houses = {
      0: this.getHouse("Gryffindor"),
      1: this.getHouse("Slytherin"),
      2: this.getHouse("Ravenclaw"),
      3: this.getHouse("Hufflepuff"),
    };

    let randomFirst = this.getRandom(4);
    let randomSecond = this.getRandom(4);
    let randomThird = this.getRandom(4);

    while (randomSecond === randomFirst) {
      randomSecond = this.getRandom(4);
    }

    while (randomThird === randomSecond || randomThird === randomFirst) {
      randomThird = this.getRandom(4);
    }

    this.setState({
      firstStudent:
        houses[randomFirst][this.getRandom(houses[randomFirst].length)],
    });
    this.setState({
      secondStudent:
        houses[randomSecond][this.getRandom(houses[randomSecond].length)],
    });
    this.setState({
      thirdStudent:
        houses[randomThird][this.getRandom(houses[randomThird].length)],
    });

    const chosenAssistant = this.state.staff[
      this.getRandom(this.state.staff.length)
    ];
    this.setState({ assistant: chosenAssistant });
  };

  render() {
    const {
      students,
      gameStarted,
      firstStudent,
      secondStudent,
      thirdStudent,
      assistant,
      voldemort,
    } = this.state;
    return (
      <div className="App">
        {!gameStarted && (
          <Start handleStart={this.handleStart} students={students} />
        )}
        {gameStarted && (
          <Game
            students={students}
            firstStudent={firstStudent}
            secondStudent={secondStudent}
            thirdStudent={thirdStudent}
            toggleGame={this.toggleGame}
            getRandom={this.getRandom}
            assistant={assistant}
            voldemort={voldemort}
          />
        )}
      </div>
    );
  }
}

export default App;
