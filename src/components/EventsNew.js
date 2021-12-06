// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Field, reduxForm, submit } from "redux-form";
// import { Link } from "react-router-dom";
// import { postEvent } from "../action";
// class EventsNew extends Component {
//   constructor(props) {
//     super(props);

//     // 本classに従属するメソッドにpropsを紐付ける(当該メソッドでpropsを利用する)ために
//     // constructorで当該メソッドをbindしています。
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   renderField(field) {
//     const {
//       input,
//       label,
//       type,
//       meta: { touched, error },
//     } = field;
//   }

//   async onSubmit(values) {
//     await this.props.postEvent(values);
//     this.props.history.push("/");
//   }

//   render() {
//     const { handleSubmit, pristine, submitting, invalid } = this.props;
//     const style = { margin: 12 };

//     return (
//       <form onSubmit={handleSubmit(this.onSubmit)}>
//         <div>
//           <Field
//             label="Title"
//             name="title"
//             type="text"
//             component={this.renderField}
//           />
//         </div>
//         <div>
//           <Field
//             label="Body"
//             name="body"
//             type="text"
//             component={this.renderField}
//           />
//           <Link to="/">キャンセル</Link>
//         </div>
//       </form>
//     );
//   }
// }

// const validate = (values) => {
//   const errors = {};

//   // タイトルが無かったらエラー
//   if (!values.title) errors.title = "Enter a title, please.";

//   // ボディーが無かったらエラー
//   if (!values.body) errors.body = "Enter a body, please.";

//   return errors;
// };

// const mapDispatchToProps = { postEvent };

// // コンポーネントをreduxFormでwrapする(decorateするとも言ったりします)ことで
// // コンポーネントのpropsが拡張され、pristine、submitting、invalid等の属性が追加されます。
// export default connect(
//   null,
//   mapDispatchToProps
// )(reduxForm({ validate, form: "eventNewForm" })(EventsNew));

import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { postEvent } from "../action";

class EventsNew extends Component {
  constructor(props) {
    super(props);

    // 本classに従属するメソッドにpropsを紐付ける(当該メソッドでpropsを利用する)ために
    // constructorで当該メソッドをbindしています。
    this.onSubmit = this.onSubmit.bind(this);
  }

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

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
  if (!values.body) errors.body = "内容を入れてください";

  return errors;
};

const mapDispatcToProps = { postEvent };

export default connect(
  null,
  mapDispatcToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
