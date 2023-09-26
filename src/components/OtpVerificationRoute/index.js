import {Component} from 'react'
import './index.css'

class OtpVerificationRoute extends Component {
  state = {
    otp: '',
    snackbarOpen: false,
  }

  componentDidMount() {
    // Simulate fetching OTP from a REST API (replace with your API call)
    setTimeout(() => {
      const generatedOTP = '123456' // Replace with the actual OTP from your server
      this.setState({
        otp: generatedOTP,
        snackbarOpen: true,
      })
    }, 1000)
  }

  handleSnackbarClose = () => {
    this.setState({snackbarOpen: false})
  }

  render() {
    const {snackbarOpen, mobileNumber} = this.state
    return (
      <div className="main-container">
        <img
          src="https://res.cloudinary.com/dunicojo6/image/upload/v1695731758/undraw_confirmed_81ex_mhmwjq.png"
          alt="website-logo"
          className="logo-image"
        />
        <h1 className="main-heading">Welcome Back</h1>
        <p className="main-paragraph">Please sign in to your account</p>
        <div className="input-number-container">
          <img
            src="https://res.cloudinary.com/dunicojo6/image/upload/v1695726711/gxbu9bzgbktta8lxmvbx.png"
            alt="input-logo"
            className="input-image"
          />
          <div className="input-card-container">
            <select>
              <options>India</options>
              <options>Rus</options>
            </select>
            <input
              value={mobileNumber}
              onChange={this.onChangeMobileNumber}
              className="input-box"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default OtpVerificationRoute
