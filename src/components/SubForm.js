import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import NewsLetter from './NewsLetter'

class SubForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    firstName: '',
    firstNameError: '',

    lastName: '',
    lastNameError: '',

    email: '',
    emailError: '',

    terms: '',
    termsError: '',

    checked: false,
    checkedError: '',

    categoryError: ''
  }
    this.handleCheckBox = this.handleCheckBox.bind(this);
}


  handleCheckBox() {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

    console.log(this.state)
  }

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      checkedError: '',
      categoryError: ''
    }

    if(!this.state.firstName) {
      isError = true;
      errors.firstNameError = 'Please enter your first name'
      console.log(this.state.firstNameError)
    }

    if(!this.state.lastName) {
      isError = true;
      errors.lastNameError = 'Please enter your last name'
      console.log(this.state.lastNameError)
    }

    if(!this.state.email) {
      isError = true;
      errors.emailError = 'Please enter your email address'
      console.log(this.state.emailError)
    } else if (this.state.email.indexOf('@') === -1) {
      isError = true;
      errors.emailError = 'Email Address must contain an "@" symbol'
    }

    if(!this.state.checked) {
      isError = true;
      errors.checkedError = 'Please agree to the privacy policy and minimum age'
    }

    if(!this.props.categoryValid) {
      isError = true;
      errors.categoryError = 'Please select at least one category above'
    }

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
        firstNameError: '',

        lastName: '',
        lastNameError: '',

        email: '',
        emailError: '',

        checked: false,
        checkedError: ''
      })
      this.props.history.push('/success');
    }
  }

  render() {
    return(
      <div>
      <form className="subform-container">

        <div className="Join-our-newsletter"></div>

        <div className="subform-inputs">
          <div className="fname-input">
            <input
              type="text"
              placeholder="First Name*"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
              errortext={this.state.firstNameError}
              />
              <p>{ this.state.firstNameError }</p>
            </div>

            <div className="lname-input">
              <input
                type="text"
                placeholder="Last Name *"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
                errortext={this.state.lastNameError}
              />
              <p>{ this.state.lastNameError }</p>
            </div>

            <div className="email-input">
              <input
                type="text"
                placeholder="Your email address *"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                errortext={this.state.emailError}
              />
              <p>{ this.state.emailError }</p>
            </div>

        <button onClick={e => this.onSubmit(e)}>
          <img
            src={require('../assets/subscribe.png')}
            alt=""
            className="subscribe"
          />
        </button>

          <div className="termsAndConditions">
            <input
              type="checkbox"
              checked={this.state.checked}
              onClick={this.handleCheckBox}
            />

          <div className="iAgree"></div>

          </div>
            <p>{ this.state.checkedError }</p>
        </div>
      </form>
      {/* <NewsLetter /> */}
    </div>
    );
  }
}



export default withRouter(SubForm);
