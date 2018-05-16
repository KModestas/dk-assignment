import React from 'react';


const SubForm = ({})=> {
    return(
      <form className="subform-container">
        <h1>SUB FORM</h1>
        <input
          type="text"
          placeholder="First Name*"
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
          />
        <input
          type="text"
          placeholder="Last Name *"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
        />
        <input
          type="text"
          placeholder="Your email address *"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <button>Submit</button>
        <input
          type="checkbox"
        />
      </form>
    );
  }



export default SubForm;
