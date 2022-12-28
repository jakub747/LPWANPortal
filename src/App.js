import { useState } from 'react';
import './styles/general.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { LocationProvider, Router } from "@reach/router"
import Networks from './pages/Networks';
import NetworkDetail from './pages/NetworkDetail';
import { test_data } from './data/network_data';
import ConnectNetwork from './pages/ConnectNetwork';
import NotFound from './pages/NotFound';
import Account from './pages/Account';
import SvgIcon from './components/icon';

let storageGetUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"))
  } catch (e) {
    return null;
  }
}

export default function App() {

  //state hooks
  const [user, setUser] = useState(storageGetUser()) //user object
  const [menu, setMenu] = useState(false)

  window.toggleMenu = () => setMenu(!menu);

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

    },
  }

  return <LocationProvider>
    {menu && <>
      <nav id='menu'>
        <header>
          <SvgIcon onClick={window.toggleMenu} name={`mdiClose`} />
        </header>
        <a href='/'>Hlavní stránka</a>
        {user && <a href='/profile'>Profil</a>}
        <a href='/networks'>LPWAN Sítě</a>
        {user && <a href='/my_devices'>Moje zařízení</a>}
        {user && <a href='/community'>Komunita</a>}
      </nav>
      <div onClick={window.toggleMenu} id='backdrop'></div>
    </>}
    <Router id='router'>
      <Home {...app_data} path='/' />
      <Login path="login" loggedIn={loggedIn} />
      <Registration path="register" />
      <Networks {...app_data} path='networks' />
      <NetworkDetail {...app_data} path='networks/:networkID' />
      <ConnectNetwork {...app_data} path='connect/:networkID' />
      <Account {...app_data} path='profile' />
      <NotFound default />
    </Router>
  </LocationProvider>
}
