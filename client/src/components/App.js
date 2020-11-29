import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import Landing from "./Landing";
import Header from "./Header";
import Surveys from "./Survey";
import * as actions from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Surveys} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
