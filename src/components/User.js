import PropTypes from "prop-types";
import { decrement } from "../action";

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
