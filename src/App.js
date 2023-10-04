import {Route, Switch} from 'react-router-dom'

import SighInRoute from './components/SighInRoute'
import OtpVerificationRoute from './components/OtpVerificationRoute'
import VerificationSuccessRoute from './components/VerificationSuccessRoute'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={SighInRoute} />
    <Route path="/verify-otp/:mobileNumber" component={OtpVerificationRoute} />
    <Route path="/otp-verify/success" component={VerificationSuccessRoute} />
    <Route component={NotFound} />
  </Switch>
)

export default App


import {Component} from 'react'

class OTPVerification extends Component {
  state = {
    mobileNumber: '',
    otp: '',
    isOtpSent: false,
    isOtpVerified: false,
    generatedOTP: '', // You can generate OTP on the server
  }

  otpInputChange = event => {
    this.setState({
      otp: event.target.value,
    })
  }

  handleInputChange = event => {
    this.setState({
      mobileNumber: event.target.value,
    })
  }

  sendOTP = () => {
    const generatedNumber = parseInt(Math.random() * 9999)
    alert(generatedNumber)
    this.setState({
      isOtpSent: true,
      generatedOTP: generatedNumber,
    })
  }

  verifyOTP = () => {
    const {otp, generatedOTP} = this.state
    console.log(otp)
    console.log(generatedOTP)
    if (parseInt(otp) === parseInt(generatedOTP)) {
      this.setState({isOtpVerified: true}, this.isOtpSendRender)
    } else {
      alert('Invalid OTP. Please try again.')
    }
  }

  isOtpSendRender = () => {
    const {mobileNumber, isOtpVerified, otp} = this.state
    return !isOtpVerified ? (
      <div>
        <p>Enter the OTP sent to {mobileNumber}:</p>
        <input
          type="text"
          name="otp"
          value={otp}
          onChange={this.otpInputChange}
        />
        <button type="button" onClick={this.verifyOTP}>
          Verify OTP
        </button>
      </div>
    ) : (
      <div>
        <p>OTP has been successfully verified!</p>
      </div>
    )
  }

  render() {
    const {isOtpSent, mobileNumber} = this.state
    return (
      <div className="App">
        {isOtpSent ? <h1>OTP Verification</h1> : <h1>Enter Mobile Number</h1>}
        {!isOtpSent ? (
          <div>
            <p>Enter your mobile number:</p>
            <input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              onChange={this.handleInputChange}
            />
            <button type="button" onClick={this.sendOTP}>
              Send OTP
            </button>
          </div>
        ) : (
          this.isOtpSendRender()
        )}
      </div>
    )
  }
}

export default OTPVerification
