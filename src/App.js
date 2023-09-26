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
