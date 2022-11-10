import React, { Component } from "react";

import classes from "./Menu.module.css";

export default class Menu extends Component {
  onSetPlayers = (select) => {
    this.props.onSetPlayers(select);
  };

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.select}>
          <h3>Player One:</h3>
          <div>
            <button
              className={`${classes.button} ${classes.left}`}
              onClick={() => this.onSetPlayers("X")}
            >
              X
            </button>
            <button
              className={`${classes.button} ${classes.right}`}
              onClick={() => this.onSetPlayers("O")}
            >
              O
            </button>
          </div>
        </div>
      </div>
    );
  }
}
