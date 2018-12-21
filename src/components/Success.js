import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  continue = e => {
    e.preventDefault();
    // Process Form //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
}

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success!" />
          <div className="success-wrapper">
            <h1 className="success-heading">Thank you for your Submission!</h1>
            <p className="success-text">You will receive an email with further instructions</p>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
