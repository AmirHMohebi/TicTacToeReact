import React, { Component } from "react";

import classes from "./App.module.css";

import Board from "./Board";
import Menu from "./Menu";

export default class App extends Component {
  state = { playerOne: "", playerTwo: "", turn: 1, end: "" };

  onSetPlayers = (select) => {
    select === "X"
      ? this.setState({ playerOne: "X", playerTwo: "O" })
      : this.setState({ playerOne: "O", playerTwo: "X" });
  };

  onTurnChange = () => {
    this.state.turn === 1
      ? this.setState({ turn: 2 })
      : this.setState({ turn: 1 });
  };

  onGameEnd = (value) => {
    this.setState({ end: value });
  };

  onRender = () => {
    if (this.state.end) {
      return <h1>{this.state.end}</h1>;
    } else if (this.state.playerOne === "") {
      return <Menu onSetPlayers={this.onSetPlayers} />;
    } else {
      return (
        <Board
          playerOne={this.state.playerOne}
          playerTwo={this.state.playerTwo}
          turn={this.state.turn}
          onTurnChange={this.onTurnChange}
          onGameEnd={this.onGameEnd}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <div className={classes.container}>{this.onRender()}</div>
      </div>
    );
  }
}
