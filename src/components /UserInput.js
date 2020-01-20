import React, { Component } from "react";
import "./UserInput.css";
import { Button } from "reactstrap";

export default class UserInput extends Component {
  state = {
    guess: []
  };

  alphabet1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  alphabet2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  alphabet3 = ["z", "x", "c", "v", "b", "n", "m"];

  handleclick = e => {
    e.preventDefault();

    let target = e.target.innerHTML;
    if (this.state.guess.indexOf(target) === -1) {
      this.setState({
        guess: [...this.state.guess, e.target.innerHTML]
      });
    }

    console.log(e.target.innerHTML);
  };

  render() {
    console.log(this.state.guess);
    return (
      <div className="container">
        <div>
          {this.alphabet1.map(letter => (
            <Button key={letter} onClick={this.handleclick}>
              {letter}{" "}
            </Button>
          ))}
        </div>

        <div>
          {this.alphabet2.map(letter => (
            <Button key={letter} onClick={this.handleclick}>
              {letter}{" "}
            </Button>
          ))}
        </div>

        <div>
          {this.alphabet3.map(letter => (
            <Button key={letter} onClick={this.handleclick}>
              {letter}{" "}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}
