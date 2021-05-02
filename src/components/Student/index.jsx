import { Component } from "react";
import "./styles.scss";

export default class Student extends Component {
  colors = {
    Gryffindor: "red",
    Slytherin: "green",
    Hufflepuff: "yellow",
    Ravenclaw: "blue",
  };

  render() {
    const { student } = this.props;
    return (
      <div className="student">
        <img
          src={student.image}
          alt={student.name}
          className={this.colors[student.house]}
        />
        <p>{student.name}</p>
        <p className={this.colors[student.house]}>{student.house}</p>
      </div>
    );
  }
}
