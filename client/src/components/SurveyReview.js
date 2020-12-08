import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import fields from "./formField";
import * as actions from "../actions";

class SurveyReview extends React.Component {
  values = this.props.form.values;
  renderReview = () => {
    return fields.map(({ name }) => {
      return (
        <div key={name}>
          <label>{name}</label>
          <p>{this.values[name]}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.sendSurvey(this.values);
          this.props.history.push("/surveys");
        }}
      >
        Survey Review:{this.renderReview()}
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.onClick();
          }}
          className="waves-effect waves-light btn left"
        >
          <i className="material-icons left">arrow_backward</i>Goback
        </button>
        <button type="submit" className="waves-effect waves-light btn right">
          <i className="material-icons left">send</i>send
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.form.surveyForm,
  };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
