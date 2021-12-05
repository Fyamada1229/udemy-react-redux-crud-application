import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, submit } from "redux-form";
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

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
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
            />
          </div>
          <div>
            <Field
              lavel="Body"
              name="body"
              type="text"
              component={this.rederField}
            />
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

  if (!values.title) errors.title = "タイトルを入れてください";
  if (!values.body) errors.body = "タイトルを入れてください";

  return errors;
};

// const mapDispatcToProps = { postEvent };

export default connect(
  null,
  null
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
