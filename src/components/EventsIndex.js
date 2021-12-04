import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../action/index";
import _ from "lodash";
import { User } from "./User";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  readerEvents() {
    return _.map(this.props.events, (event) => (
      <tr ker={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
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
          <tbody>{this.readerEvents()}</tbody>
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
