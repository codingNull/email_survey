import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import Landing from "./Landing";
import Header from "./Header";
import Surveys from "./Survey";
import SurveysNew from "./SurveysNew";
import * as actions from "../actions";

class App extends React.Component {
  componentDidMount() {
    const result = this.props.fetchUser();
    console.log(result);
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Surveys} />
          <Route exact path="/surveys/new" component={SurveysNew} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
