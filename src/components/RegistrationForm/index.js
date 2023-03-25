import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameRequired: false,
    lastNameRequired: false,
    firstError: '',
    lastError: '',
    isSubmit: true,
  }

  inputFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameRequired: true, firstError: 'er-msg'})
    } else {
      this.setState({firstNameRequired: false, firstError: ''})
    }
  }

  inputLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameRequired: true, lastError: 'er-msg'})
    } else {
      this.setState({lastNameRequired: false, lastError: ''})
    }
  }

  inputFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  inputLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmit: false, firstName: '', lastName: ''})
    }
    if (firstName === '') {
      this.setState({firstNameRequired: true, firstError: 'er-msg'})
    }
    if (lastName === '') {
      this.setState({lastNameRequired: true, lastError: 'er-msg'})
    }
  }

  onSubmitBtn = () => {
    this.setState({isSubmit: true})
  }

  render() {
    const {
      lastNameRequired,
      firstNameRequired,
      lastError,
      firstError,
      isSubmit,
    } = this.state
    return (
      <div className="bg-container">
        <h1 className="form-name">Registration</h1>
        {isSubmit ? (
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="firstName-container">
              <label htmlFor="firstName">FIRST NAME</label>
              <br />
              <input
                type="text"
                id="firstName"
                className={firstError}
                placeholder="First name"
                onBlur={this.inputFirstName}
                onChange={this.inputFirstNameChange}
              />
              {firstNameRequired && <p className="error-msg">Required</p>}
            </div>

            <div className="lastName-container">
              <label htmlFor="lastName">LAST NAME</label>
              <br />
              <input
                type="text"
                id="lastName"
                className={lastError}
                placeholder="Last name"
                onBlur={this.inputLastName}
                onChange={this.inputLastNameChange}
              />
              {lastNameRequired && <p className="error-msg">Required</p>}
            </div>

            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        ) : (
          <div className="submit-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button
              type="button"
              className="submitButton"
              onClick={this.onSubmitBtn}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
