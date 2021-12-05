import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
// import { postEvent } from "../action";

class EventsNew extends Component {
  rederField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;

    return <div></div>;
  }

  render() {
    return (
      <>
        <form>
          <div>
            <Field
              lavel="Title"
              name="title"
              type="text"
              component={this.rederField}
            ></Field>
          </div>
          <div>
            <Field
              lavel="Body"
              name="body"
              type="text"
              component={this.rederField}
            ></Field>
          </div>

          <div>
            <input type="submit" value="Submit" disabled={false} />
            <Link to="/">キャンセル</Link>
          </div>
        </form>
      </>
    );
  }
}

const validate = (values) => {
  const errors = {};

  return errors;
};
// const mapDispatcToProps = { postEvent };

export default connect(
  null,
  null
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
