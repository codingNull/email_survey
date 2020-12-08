import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckOut from "react-stripe-checkout";
import * as actions from "../actions";

class Header extends React.Component {
  renderAnchor = () => {
    switch (this.props.auth) {
      case null:
        return <div>loading</div>;
      case false:
        return <a href="auth/google">Sign In With Google</a>;
      default:
        return [
          <li key="1">
            <StripeCheckOut
              name="Add credits to send surveys"
              description="5 dollars for 5 surveys"
              ComponentClass="div"
              panelLabel="Pay Now"
              amount={500}
              currency="USD"
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              email="info@vidhub.co"
              token={(token) => this.props.addCredits(token)}
            >
              <button className="btn">Add Credits</button>
            </StripeCheckOut>
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Sign Out</a>
          </li>,
        ];
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to={this.props.auth ? "/surveys" : "/"}>
            Mail Survey
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderAnchor()}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, actions)(Header);
