import React, { Component } from 'react';
import prettyMilliseconds from 'pretty-ms';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      time:0,
      isOn:false
    };
  }

  handleStart = () => {
    this.intervalId = setInterval (() => {
      this.setState((state) => {
      return { 
        time: state.time + 10,
        isOn:true
      };
    });
    }, 10);
  };

  handlePause = () => {
    this.setState({
      isOn:false,
      }, () =>
    clearInterval(this.intervalId)
    );
  };

  handleReset = () => {
    this.handlePause();
    this.setState({
      time:0,
    }); 
  };

  render() {
    const {time, isOn} = this.state;

    return (
      <>
        <p>{prettyMilliseconds(time, {colonNotation: true})}</p>
        <button onClick={this.handleStart} disabled={isOn===true}>Start</button>
        <button onClick={this.handlePause} disabled={isOn!==true}>Pause</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    )
  }
}

export default App;