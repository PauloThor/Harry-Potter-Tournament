import { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import Start from "./components/Start";

class App extends Component {
  state = {
    students: [],
    loading: true,
    gameStarted: false,
    first: 0,
    second: 1,
    third: 2,
  };

  getRandom = () => {
    return Math.floor(Math.random() * (this.state.students.length - 1));
  };

  handleRandom = () => {
    let randomFirst = this.getRandom();
    let randomSecond = this.getRandom();
    let randomThird = this.getRandom();

    while (randomSecond === randomFirst) {
      randomSecond = this.getRandom();
    }

    while (randomThird === randomSecond || randomThird === randomFirst) {
      randomThird = this.getRandom();
    }

    this.setState({ first: randomFirst });
    this.setState({ second: randomSecond });
    this.setState({ third: randomThird });
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
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) =>
        this.setState({ students: response, loading: false })
      );
  }

  render() {
    const { students, gameStarted, first, second, third } = this.state;
    return (
      <div className="App">
        {!gameStarted && (
          <Start handleStart={this.handleStart} students={students} />
        )}
        {gameStarted && (
          <Game
            students={students}
            first={first}
            second={second}
            third={third}
            toggleGame={this.toggleGame}
          />
        )}
      </div>
    );
  }
}

export default App;
