import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../action/index";
// import _ from lodash は便利な関数をまとめて提供しているライブラリです。
import _ from "lodash";
import { User } from "./User";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  readerEvents() {
    // _.mapはlodashが提供する便利な関数
    return _.map(this.props.events, (event) => (
      <TableRow ker={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
    };
    return (
      <>
        <FloatingActionButton
          style={style}
          containerElement={<Link to={`/events/new`} />}
        >
          <ContentAdd></ContentAdd>
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>タイトル</TableHeaderColumn>
              <TableHeaderColumn>内容</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false}>
            {this.readerEvents()}
          </TableBody>
        </Table>
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
