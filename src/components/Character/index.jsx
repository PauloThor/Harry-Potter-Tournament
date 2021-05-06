import { Component } from "react";

import "./styles.scss";

export default class Character extends Component {
  colors = {
    Gryffindor: "red",
    Slytherin: "green",
    Hufflepuff: "yellow",
    Ravenclaw: "blue",
  };

  render() {
    const { remainingStudents } = this.props;
    return (
      <div className="chooseCharacter">
        {remainingStudents.map((student, i) => (
          <div onClick={this.props.chooseCharacter} key={i} className="student">
            <img
              key={i}
              src={student.image}
              alt={student.name}
              className={this.colors[student.house]}
            />
          </div>
        ))}
      </div>
    );
  }
}
