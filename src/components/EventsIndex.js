import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../action/index";
import { User } from "./User";

class EventsIndex extends Component {
  componentDidMount() {
    console.log("hi");
    this.props.readEvents();
  }

  render() {
    const props = this.props;

    return (
      <>
        <div>
          <User name="Yamada" age={31} />
        </div>
        <div></div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatcToProps = { readEvents };

// dispatchのショートハンドではない書き方。
// const mapDispatcToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatcToProps)(EventsIndex);
