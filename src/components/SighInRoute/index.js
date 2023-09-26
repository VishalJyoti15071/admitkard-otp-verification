import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class SighInRoute extends Component {
  state = {mobileNumber: ''}

  onChangeMobileNumber = event => {
    const {mobileNumber} = this.state
    const inputValue = event.target.value

    this.setState({mobileNumber: event.target.value})

    console.log(mobileNumber)
    console.log(inputValue)
    console.log(typeof value)
    console.log(Number(inputValue))
  }

  render() {
    const {mobileNumber} = this.state
    return (
      <div className="main-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBs2BxijGM68oqbdcbzYqeL3oyljmDSNeu24ratau&s"
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
          <p className="charges-paragraph">
            We will send you a one time SMS message. Charges may apply.
          </p>
          <Link
            className="link-button-container"
            to={`/verify-otp/:${mobileNumber}`}
          >
            <button type="button">Sign In with OTP</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SighInRoute
