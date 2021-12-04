import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../action";
import { User } from "./User";

class App extends Component {
  render() {
    const props = this.props;
    return (
      <>
        <div>
          <User name="Yamada" age="31" />
        </div>
        <div>
          <h1>value: {props.value}</h1>
          <button onClick={props.increment}>+1</button>
          <button onClick={props.decrement}>-1</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ value: state.count.value });
const mapDispatcToProps = { increment, decrement };

// dispatchのショートハンドではない書き方。
// const mapDispatcToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatcToProps)(App);
