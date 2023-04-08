import { useState } from 'react';
import './styles/general.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { LocationProvider, Router } from "@reach/router"
import Networks from './pages/Networks';
import Devices from './pages/Devices';
import NetworkDetail from './pages/NetworkDetail';
import { test_data } from './data/network_data';
import ConnectNetwork from './pages/ConnectNetwork';
import NotFound from './pages/NotFound';
import Account from './pages/Account';
import SvgIcon from './components/icon';
import DeviceDetail from './pages/DeviceDetail';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

let storageGetUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"))
  } catch (e) {
    return null;
  }
}

// function setCookie(name, val, options = { expires: 7, secure: true }) {
//   Cookies.set(name, JSON.stringify(val), options);
// }

// function getCookie(name) {
//   let val = Cookies.get(name) || null;
//   try {
//     val = JSON.parse(val)
//   } catch (e) { }
//   console.log({ name, val })
//   return val;
// }

function setCookie(name, value, days = 7) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function remCookie(name) {
  setCookie(name, "", -1);
}


// function removeCookie(name) {
//   Cookies.remove(name)
// }

export default function App() {

  //state hooks
  const token = getCookie(`token`)
  const [user, setUser] = useState(token ? storageGetUser() : null) //user object
  const [menu, setMenu] = useState(false)

  window.toggleMenu = () => setMenu(!menu);

  const getUser = async () => {
    const [success, result] = await REST(`GET`, `/Account`)
    if (success) loggedIn(result)
  }

  useEffect(() => {
    if (!user) getUser()
  }, [])

  /**
   * Callback after user successfuly logged/registered
   * @param {*} user 
   */
  const loggedIn = (user) => {
    setCookie(`token`, user?.token)
    let newuser = { ...user }
    delete newuser?.token
    localStorage.setItem(`user`, JSON.stringify(newuser))
    setUser(user)
  }

  const loggedOut = () => {
    remCookie(`token`)
    localStorage.removeItem(`user`)
    setUser(null)
  }

  const REST = async (method, url, body, proceedWithoutToken) => {
    try {
      let fetchparams = {
        method: method,
        mode: "cors",
        // cache: "no-cache",
        // credentials: "include",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Content-Encoding": "application/json",
          // "Access-Control-Allow-Headers": "X-Server-Started, ETag",
          // "Access-Control-Expose-Header": "X-Server-Started, ETag",
        },
      }

      if (!proceedWithoutToken && !token) return;
      if (token) fetchparams.headers.Authorization = `Bearer ${token}`;
      if (body) fetchparams.body = JSON.stringify(body)
      const response = await fetch(`${app_data?.api_url}${url}`, fetchparams);
      console.log({ response })
      if (response?.status === 200) {
        try {
          const jsonData = await response.json();
          console.log({ jsonData })
          return [true, jsonData]
        } catch (e) {
          return [true]
        }
      }
      return [false]
    }
    catch (e) {
      return [false]
    }
  }

  //rendering login page
  // if (!user) return <Login loggedIn={loggedIn} />

  let app_data = {
    user: user,
    api_url: `https://lpwanapiv3.azurewebsites.net`,
    strings: {
      motto: `Připoj to!`,
      web_description: `Naše stránka je určena pro zákazníky, kteří hledají spolehlivé a výkonné připojení pro svá IoT zařízení. Na stránkách naleznete informace o různých typech LPWAN sítí, jako je například LoRaWAN nebo Sigfox, a o možnostech připojení, které poskytovatel nabízí. K dispozici jsou také podrobné popisy jednotlivých tarifů a ceníky. Pro zákazníky je připraven také sekce s často kladenými otázkami a kontaktními údaji pro získání dalších informací nebo pomoci s nastavením připojení.`

    },
    REST,
    getCookie,
    setCookie,
    remCookie,
    loggedOut
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
        {user && <a href='/devices'>Moje zařízení</a>}
        {/* {user && <a href='/community'>Komunita</a>} */}
      </nav>
      <div onClick={window.toggleMenu} id='backdrop'></div>
    </>}
    <Router id='router'>
      <Home {...app_data} path='/' />
      <Login path="/login/" loggedIn={loggedIn} {...app_data} />
      <Registration path="register" {...app_data} />
      <Networks {...app_data} path='networks' />
      <Devices {...app_data} path='devices' />
      <DeviceDetail {...app_data} path='devices/:deviceID' />
      <NetworkDetail {...app_data} path='networks/:networkID' />
      <ConnectNetwork {...app_data} path='connect/:networkID' />
      <Account {...app_data} path='profile' />
      <NotFound default />
    </Router>
  </LocationProvider>
}
