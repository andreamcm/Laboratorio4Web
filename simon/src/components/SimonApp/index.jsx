/*Universidad del Valle de Guatemala
   Andrea Maria Cordon Mayen
   Carne: 16076
   simonApp.jsx
*/

import React, { Fragment } from 'react';

import { getRndInteger } from '../../utils/random';
import Simon from '../Simon';
import './simonApp.css'


class SimonApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentButton: 0,
      colors: ['green', 'red', 'yellow', 'blue'],
      currentPattern: [],
      playerPattern: [],
    };
  }

  _changeButton(){
    const {currentPattern} = this.state;
    const random = getRndInteger(0, 4);
    currentPattern.push(random);

    this.setState({
      currentPattern: currentPattern,
      currentButton: random,
    })
    console.log(this.state.currentButton);
  }

  _startSequence(){
    const timer = setInterval(() => this._changeButton(), 1000);
    this.setState({
      timer, 
    })
  }

  render() {
    const { colors, currentButton } = this.state;
    return (
      <Fragment>
        <Simon turnedOnLight = {colors[currentButton]}/>
        <button className = 'start' onClick={this._startSequence.bind(this)}>Start!</button>
      </Fragment>
    );
  }
}


export default SimonApp;
