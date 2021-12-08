import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../action/index";
// import _ from lodash は便利な関数をまとめて提供しているライブラリです。
import _ from "lodash";
import { User } from "./User";
import { Link } from "react-router-dom";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  readerEvents() {
    // _.mapはlodashが提供する便利な関数です。
    return _.map(this.props.events, (event) => (
      <tr ker={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </td>
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

        <Link to={`/events/new`}>新規作成</Link>
        <Link to="/user">ユーザー</Link>
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
