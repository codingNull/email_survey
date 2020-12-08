import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class SurveysList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
    this.props.fetchUser();
  }
  renderSurveysList = () => {
    const surveys = this.props.surveys;
    return surveys.map(({ yes, no, subject, _id }) => {
      return (
        <tr key={_id}>
          <td>{subject}</td>
          <td>{yes}</td>
          <td>{no}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table className="striped">
        <thead>
          <tr>
            <th>Subject</th>
            <th>The numbers of 'Yes' clicked</th>
            <th>The numbers of 'No' clicked</th>
          </tr>
        </thead>

        <tbody>{this.renderSurveysList()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, actions)(SurveysList);
