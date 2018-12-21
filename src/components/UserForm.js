import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  /* Next Step */
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  /* Previous Step */
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  /* Handle Fields Change */
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const {  step } = this.state;
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
         /*  <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          /> */
          <p>temp</p>
        );
      case 3:
        return (
         /*  <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          /> */
          <p>temp2</p>
        );
      case 4:
        return <p>temp3</p>;
    }
  }
}

export default UserForm;
