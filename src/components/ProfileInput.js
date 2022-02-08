import React, { Component } from "react";

class ProfileInput extends Component {
  render() {
    const { inputChange } = this.props;
    const { pageAnimate } = this.props;
    const { firstName } = this.props;
    const { lastName } = this.props;
    const { phoneNumber } = this.props;
    const { email } = this.props;
    const { addressLine1 } = this.props;
    const { addressLine2 } = this.props;
    const { city } = this.props;
    const { state } = this.props;
    const { zip } = this.props;
    const { country } = this.props;

    return (
      <form>
        <h2>Personal Information</h2>
        <div className="inputWrapper">
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            type='text'
            id='firstName'
            onChange={inputChange}
            required
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastName}
            type='text'
            id='lastName'
            onChange={inputChange}
            required
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={phoneNumber}
            type='tel'
            id='phoneNumber'
            onChange={inputChange}
            required
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type='email'
            id='email'
            onChange={inputChange}
            required
          />
        </div>
        <fieldset>
          <legend>Address</legend>
          <div className="addressWrapper">
            <h2>Address</h2>
              <div className="inputWrapper addressLine1">
                <label htmlFor="addressLine1">Address Line 1</label>
                <input
                  value={addressLine1}
                  type='text'
                  id='addressLine1'
                  onChange={inputChange}
                  required
                />
              </div>
              <div className="inputWrapper addressLine2">
                <label htmlFor="addressLine2">Address Line 2</label>
                <input
                  value={addressLine2}
                  type='text'
                  id='addressLine2'
                  onChange={inputChange}
                />
              </div>
              <div className="inputWrapper city">
                <label htmlFor="city">City</label>
                <input
                  value={city}
                  type='text'
                  id='city'
                  onChange={inputChange}
                  required
                />
              </div>
              <div className="inputWrapper state">
                <label htmlFor="state">State/Province/Region</label>
                <input
                  value={state}
                  type='text'
                  id='state'
                  onChange={inputChange}
                  required
                />
              </div>
              <div className="inputWrapper zip">
                <label htmlFor="zip">Postal/Zip Code</label>
                <input
                  value={zip}
                  type='text'
                  id='zip'
                  onChange={inputChange}
                  required
                />
              </div>
              <div className="inputWrapper country">
                <label htmlFor="country">Country</label>
                <input
                  value={country}
                  type='text'
                  id='country'
                  onChange={inputChange}
                  required
                />
              </div>            
          </div>
        </fieldset>
        <button
          type="submit"
          onClick={pageAnimate}>
          Next
        </button>
      </form>
    )    
  }
}

export default ProfileInput