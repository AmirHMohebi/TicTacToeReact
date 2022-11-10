import React, { Component } from "react";

import BoardRow from "./BoardRow";

import classes from "./Board.module.css";

export default class Board extends Component {
  state = {
    board: [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ],
  };

  onSelectHandler = (rowIndex, cellIndex) => {
    const newBoard = this.state.board;
    newBoard[rowIndex][cellIndex] =
      this.props.turn === 1 ? this.props.playerOne : this.props.playerTwo;
    console.log(newBoard);
    this.setState({ board: newBoard });
  };

  onGameEnd = () => {
    const player =
      this.props.turn === 1 ? this.props.playerOne : this.props.playerTwo;
    let end = false;

    for (let i = 0; i < this.state.board.length; i++) {
      end = true;
      for (let j = 0; j < this.state.board[0].length; j++) {
        if (this.state.board[i][j] !== player) {
          end = false;
          continue;
        }
      }
      if (end) {
        console.log("ROW RUN");
        this.props.onGameEnd(`${player} Win!`);
        return;
      }
    }

    for (let i = 0; i < this.state.board.length; i++) {
      end = true;
      for (let j = 0; j < this.state.board[0].length; j++) {
        if (this.state.board[j][i] !== player) {
          end = false;
          continue;
        }
      }
      if (end) {
        console.log("COLUMN RUN");
        this.props.onGameEnd(`${player} Win!`);
        return;
      }
    }

    end = true;
    for (let i = 0; i < this.state.board.length; i++) {
      if (this.state.board[i][i] !== player) {
        end = false;
        continue;
      }
    }
    if (end) {
      console.log("DIAGRAM1 RUN");
      this.props.onGameEnd(`${player} Win!`);
      return;
    }

    end = true;
    for (let i = 0; i < this.state.board.length; i++) {
      if (this.state.board[i][2 - i] !== player) {
        end = false;
        continue;
      }
    }
    if (end) {
      console.log("DIAGRAM2 RUN");
      this.props.onGameEnd(`${player} Win!`);
      return;
    }

    for (let i = 0; i < this.state.board.length; i++) {
      for (let j = 0; j < this.state.board[0].length; j++) {
        if (this.state.board[i][j] === "-") {
          this.props.onGameEnd("");
          return;
        }
      }
    }

    this.props.onGameEnd("EVEN");
    return;
  };

  render() {
    return (
      <div>
        <BoardRow
          onSelectHandler={this.onSelectHandler}
          onTurnChange={this.props.onTurnChange}
          turn={this.props.turn}
          playerOne={this.props.playerOne}
          playerTwo={this.props.playerTwo}
          onGameEnd={this.onGameEnd}
          rowIndex={0}
        />
        <BoardRow
          onSelectHandler={this.onSelectHandler}
          onTurnChange={this.props.onTurnChange}
          turn={this.props.turn}
          playerOne={this.props.playerOne}
          playerTwo={this.props.playerTwo}
          onGameEnd={this.onGameEnd}
          rowIndex={1}
        />
        <BoardRow
          className={classes.lastRow}
          onSelectHandler={this.onSelectHandler}
          onTurnChange={this.props.onTurnChange}
          turn={this.props.turn}
          playerOne={this.props.playerOne}
          playerTwo={this.props.playerTwo}
          onGameEnd={this.onGameEnd}
          rowIndex={2}
        />
      </div>
    );
  }
}
