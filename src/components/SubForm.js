import React, { Component } from 'react';


class SubForm extends Component {

  state = {
    firstName: '',
    firstNameError: '',

    lastName: '',
    lastNameError: '',

    email: '',
    emailError: '',

    terms: '',
    termsError: ''
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

    console.log(this.state)
  }

  validate = () => {
    let isError = false;
    const errors = {}

    if(!this.state.firstName) {
      isError = true;
      errors.firstNameError = 'Please enter your first name'
    }

    if(!this.state.lastName) {
      isError = true;
      errors.lastNameError = 'Please enter your last name'
    }

    if(!this.state.email) {
      isError = true;
      errors.emailError = 'Please enter your email address'
    }

    // if(!this.state.firstName) {
    //   isError = true;
    //   errors.firstNameError = 'Please enter your first name'
    // }

    if (isError) {
      this.setState({
        ...errors
      });
    }

    return isError;
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);

    const err = this.validate();
      if (!err) {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        terms: ''
      })
    }
  }

  render() {
    return(
      <form className="subform-container">
        <h1>SUB FORM</h1>
        <input
          type="text"
          placeholder="First Name*"
          name="firstName"
          onChange={this.change}
          value={this.state.firstName}
          errortext={this.state.firstNameError}
          />
        <input
          type="text"
          placeholder="Last Name *"
          name="lastName"
          onChange={this.change}
          value={this.state.lastName}
          errortext={this.state.lastNameError}
        />
        <input
          type="text"
          placeholder="Your email address *"
          name="email"
          onChange={this.change}
          value={this.state.email}
          errortext={this.state.emailError}
        />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
        <input
          type="checkbox"
        />
      </form>
    );
  }
}



export default SubForm;
