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

  let app_data = {
    user: user,
    strings: {
      
      motto: `Připoj to!`,
      web_description: `Naše stránka je určena pro zákazníky, kteří hledají spolehlivé a výkonné připojení pro svá IoT zařízení. Na stránkách naleznete informace o různých typech LPWAN sítí, jako je například LoRaWAN nebo Sigfox, a o možnostech připojení, které poskytovatel nabízí. K dispozici jsou také podrobné popisy jednotlivých tarifů a ceníky. Pro zákazníky je připraven také sekce s často kladenými otázkami a kontaktními údaji pro získání dalších informací nebo pomoci s nastavením připojení.`

    }
  }

  return <LocationProvider>
    <Router id='router'>
      <Home {...app_data} path='/' />
      <Login path="login" />
      <Login path="register" />
      <Networks {...app_data} path='networks' />
      <Networks {...app_data} path='networks/:networkID' />
    </Router>
  </LocationProvider>
}
