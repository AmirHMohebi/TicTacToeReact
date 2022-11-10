import React, { Component } from "react";

import classes from "./BoardCell.module.css";

export default class BoardCell extends Component {
  state = { content: "" };
  onSelectHandler = () => {
    this.props.onSelectHandler(this.props.rowIndex, this.props.cellIndex);
    this.props.turn === 1
      ? this.setState({ content: this.props.playerOne })
      : this.setState({ content: this.props.playerTwo });
    this.props.onGameEnd();
    this.props.onTurnChange();
  };

  render() {
    return (
      <div
        className={`${classes.container} ${classes[this.state.content]}`}
        onClick={this.onSelectHandler}
      >
        {this.state.content}
      </div>
    );
  }
}
