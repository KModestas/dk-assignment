import React, { Component } from 'react';


class SubForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    terms: ''
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
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
          />
        <input
          type="text"
          placeholder="Last Name *"
          name="lastName"
          onChange={this.change}
          value={this.state.lastName}
        />
        <input
          type="text"
          placeholder="Your email address *"
          name="email"
          onChange={this.change}
          value={this.state.email}
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
