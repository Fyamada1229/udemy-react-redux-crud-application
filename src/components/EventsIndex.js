import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../action/index";
import { User } from "./User";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  render() {
    const props = this.props;

    console.log(props.event);
    return (
      <>
        <div>
          <User name="Yamada" age={31} />
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>内容</th>
            </tr>
          </thead>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatcToProps = { readEvents };

// dispatchのショートハンドではない書き方。
// const mapDispatcToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatcToProps)(EventsIndex);
