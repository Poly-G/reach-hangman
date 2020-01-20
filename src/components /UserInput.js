import React, { Component } from "react";
import "./UserInput.css";
import { Button } from "reactstrap";

export default class UserInput extends Component {
  state = {
    input: []
  };
  render() {
    return (
      <div className="container">
        <Button>a</Button>
      </div>
    );
  }
}
