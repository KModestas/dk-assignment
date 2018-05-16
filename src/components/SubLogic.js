import React, { Component } from 'react';
import SubForm from './SubForm';

class SubLogic extends Component {

  state = {
    user: {
      email: '',
      firstName: '',
      lastName: ''
    },
    errors: {
      message: ''
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });

    const errors = Object.assign({}, this.state.errors.message, { [name]: '' });
    this.setState({ user, errors });
  }

  handleSubmit = (e) => {

  }

  render() {
    console.log(this.state.errors);
    return (
      <div>
        <div className="marginDiv"></div>
        <SubForm
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
      </div>

    );
  }
}

// Loginform component is being imported, and passed in props which are the functions / logic defined of the current Login component

export default SubLogic;
