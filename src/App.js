import React from "react";
import axios from "axios";

import "./App.css";
import UserInput from "./components /UserInput";

class App extends React.Component {
  state = {
    words: [],
    secretWord: []
  };

  // get request, split the data into an array
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words"
      )
      .then(res => {
        const wordsArray = res.data.split("\n");
        // find random array
        let random = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        this.setState({ words: wordsArray, secretWord: random });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { secretWord } = this.state;

    return (
      <div className="App">
        <p>{secretWord}</p>
        <UserInput />
      </div>
    );
  }
}

export default App;
