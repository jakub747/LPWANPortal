import { useState } from 'react';
import './styles/general.scss';
import Header from './components/header';
import Home from './pages/Home';
import Navbar from "./components/Navbar"
import Login from './pages/Login';
import { LocationProvider, Router } from "@reach/router"
import Networks from './pages/Networks';


export default function App() {

  //state hooks
  const [user, setUser] = useState(null) //user object

  /**
   * Callback after user successfuly logged/registered
   * @param {*} user 
   */
  const loggedIn = (user) => {
    setUser(user)
  }

  //rendering login page
  // if (!user) return <Login loggedIn={loggedIn} />

  return <LocationProvider>
    <Router id='router'>
      <Home path='/' />
      <Networks path='networks' /> 
      <Networks path='networks/:networkID' /> 
    </Router>
  </LocationProvider>
}
