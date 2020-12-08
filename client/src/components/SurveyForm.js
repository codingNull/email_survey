import React from "react";
import { reduxForm, Field } from "redux-form";
import renderField from "./renderField";
import fields from "./formField";
import { validate } from "./validate";

class SurveyForm extends React.Component {
  renderItems = () => {
    return fields.map(({ name, label }) => {
      return (
        <Field
          name={name}
          type="text"
          component={renderField}
          key={name}
          label={label}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!this.props.handleSubmit()) {
              this.props.onSubmit();
            }
          }}
          //this.props.onSubmit();
        >
          {this.renderItems()}
          <a className="waves-effect waves-light btn left" href="/surveys">
            <i className="material-icons left">arrow_backward</i>Goback
          </a>
          <button type="submit" className="waves-effect waves-light btn right">
            <i className="material-icons left">arrow_forward</i>Next
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false,
})(SurveyForm);
