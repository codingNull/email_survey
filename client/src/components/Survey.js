import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SurveysList from "./SurveysList";
import { fetchUser } from "../actions";

class Surveys extends React.Component {
  renderLink = () => {
    return (
      <div className="fixed-action-btn">
        <Link
          className="btn-floating btn-large waves-effect waves-light red"
          to="/surveys/new"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div>
          <h3>Surveys List:</h3>
          {this.props.surveys ? <SurveysList /> : ""}
        </div>
        {this.renderLink()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys,
  };
};

export default connect(mapStateToProps, { fetchUser })(Surveys);
