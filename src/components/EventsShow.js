import React, { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { getEvent, deleteEvent, putEvent } from "../action/index";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class EventsShow extends Component {
  constructor(props) {
    super(props);
    // 本classに従属するメソッドにpropsを紐付ける(当該メソッドでpropsを利用する)ために
    // constructorで当該メソッドをbindしています。
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
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

  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push("/");
  }

  async onSubmit(values) {
    await this.props.putEvent(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = { margin: 12 };

    return (
      <>
        <h2>show</h2>
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
          <div>
            <RaisedButton
              label="投稿"
              type="submit"
              style={style}
              disabled={pristine || submitting || invalid}
            />
            <RaisedButton
              label="キャンセル"
              style={style}
              containerElement={<Link to="/" />}
            />
            <RaisedButton
              label="削除"
              style={style}
              onClick={this.onDeleteClick}
            />
          </div>
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

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
};

const mapDispatcToProps = { deleteEvent, getEvent, putEvent };

export default connect(
  mapStateToProps,
  mapDispatcToProps
)(
  // enableReinitialize: true は再初期化するときに必要コード。要するに
  // 動的に変わるときに変更を追従する形にするための書く。
  reduxForm({ validate, form: "eventShowForm", enableReinitialize: true })(
    EventsShow
  )
);
