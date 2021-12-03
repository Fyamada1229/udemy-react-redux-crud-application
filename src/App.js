import React, { Component } from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Futoshi", age: 31 },
    { name: "No name", age: 3 },
  ];

  return (
    <>
      <div className="App">
        {profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />;
        })}
      </div>
      <div>
        <Counter />
      </div>
    </>
  );
};

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
};

class Counter extends Component {
  // Compnentの中ではrenderを使う
  // returnを書く
  constructor(props) {
    super(props);
    console.log(this.state);

    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
      </>
    );
  }
}

// ここは先頭が小文字でpropTypes
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default App;
