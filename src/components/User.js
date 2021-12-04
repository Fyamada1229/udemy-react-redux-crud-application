import PropTypes from "prop-types";
import { increment, decrement, multiplication } from "../action/index";
import { connect } from "react-redux";

export const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  );
};

// ここは先頭が小文字でpropTypes
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({ value: state.count.value });
const mapDispatcToProps = { increment, decrement, multiplication };

export default connect(mapStateToProps, mapDispatcToProps)(User);
