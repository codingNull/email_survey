import React from "react";
import { connect } from "react-redux";

class Landing extends React.Component {
  render() {
    return (
      <div>
        {this.props.auth ? (
          this.props.history.push("/surveys")
        ) : (
          <div>
            <p>sign in with your google account</p>
            <p>
              add credits by clicking 'Add Credits' button before sending
              surveys
            </p>
            <p>use 4242 4242 4242 4242 as accout number to test payment</p>
            <p>App will send email surveys with links in it</p>
            <p>tracking user feedback with sendgrid webhook</p>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Landing);
