import React, { Component } from 'react';
import './Result.scss';

class Result extends Component {
  state = {};

  render() {
    return (
      <div className="result">
        <h2 className="result__text">
          If you could have dinner with anyone currently alive, who would it be?
        </h2>
      </div>
    );
  }
}

export default Result;
