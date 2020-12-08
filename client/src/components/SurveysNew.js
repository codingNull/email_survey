import React from "react";
import { connect } from "react-redux";

import SurveyForm from "./SurveyForm";
import SurveyReview from "./SurveyReview";

class SurveysNew extends React.Component {
  state = { isReview: false };

  renderForm = () => {
    if (this.props.auth.credits < 1) {
      return <div className="red">You don't have enough credits.</div>;
    }
    if (this.state.isReview) {
      return (
        <SurveyReview
          onClick={() => {
            this.setState({ isReview: false });
          }}
        />
      );
    }
    return <SurveyForm onSubmit={() => this.setState({ isReview: true })} />;
  };

  render() {
    return <div>{this.renderForm()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(SurveysNew);
