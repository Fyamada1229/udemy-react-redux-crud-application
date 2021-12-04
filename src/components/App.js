import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increment, decrement } from "../action";

class App extends Component {
  render() {
    const props = this.props;
    return (
      <>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
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

// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//     </div>
//   );
// };

// // ここは先頭が小文字でpropTypes
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,
// };
