import React, { Component } from "react";

import BoardCell from "./BoardCell";

import classes from "./BoardRow.module.css";

export default class BoardRow extends Component {
  render() {
    return (
      <div className={`${classes.container} ${this.props.className}`}>
        <BoardCell
          onSelectHandler={this.props.onSelectHandler}
          rowIndex={this.props.rowIndex}
          onTurnChange={this.props.onTurnChange}
          turn={this.props.turn}
          playerOne={this.props.playerOne}
          playerTwo={this.props.playerTwo}
          onGameEnd={this.props.onGameEnd}
          cellIndex={0}
        />
        <BoardCell
          onSelectHandler={this.props.onSelectHandler}
          rowIndex={this.props.rowIndex}
          onTurnChange={this.props.onTurnChange}
          turn={this.props.turn}
          playerOne={this.props.playerOne}
          playerTwo={this.props.playerTwo}
          onGameEnd={this.props.onGameEnd}
          cellIndex={1}
        />
        <BoardCell
          onSelectHandler={this.props.onSelectHandler}
          rowIndex={this.props.rowIndex}
          onTurnChange={this.props.onTurnChange}
          turn={this.props.turn}
          playerOne={this.props.playerOne}
          playerTwo={this.props.playerTwo}
          onGameEnd={this.props.onGameEnd}
          cellIndex={2}
        />
      </div>
    );
  }
}
