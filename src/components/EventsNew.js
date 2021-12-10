import React, { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { postEvent } from "../action";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
class EventsNew extends Component {
  constructor(props) {
    super(props);

    // 本classに従属するメソッドにpropsを紐付ける(当該メソッドでpropsを利用する)ために
    // constructorで当該メソッドをbindしています。
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    const {
      input,
      label,
      type,
      // touched, errorはReduxFrom特有
      meta: { touched, error },
    } = field;

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    );
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = { margin: 12 };

    return (
      <>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              lavel="Title"
              name="title"
              type="text"
              component={this.renderField}
            />
          </div>
          <div>
            <Field
              lavel="Body"
              name="body"
              type="text"
              component={this.renderField}
            />
          </div>

          <RaisedButton
            label="新規投稿"
            type="submit"
            style={style}
            disabled={pristine || submitting || invalid}
          />
          <RaisedButton
            label="キャンセル"
            style={style}
            containerElement={<Link to="/" />}
          />
        </form>
      </>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) errors.title = "タイトルを入れてください";
  if (!values.body) errors.body = "内容を入れてください";

  return errors;
};

const mapDispatcToProps = { postEvent };

export default connect(
  null,
  mapDispatcToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
