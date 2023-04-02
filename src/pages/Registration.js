import { navigate } from '@reach/router';
import React, { useCallback } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import "../styles/FormStyle.css"

/**
 * 
 * @returns Regstration page
 */
export default function Regstration({ loggedIn, api_url }) {

    const logged = () => {
        localStorage.setItem("user", JSON.stringify({ username: `testuser`, name: `Test`, surname: `User` }))
        navigate("/")
    }

    const submit = useCallback(async () => {
        if (!api_url) return logged(); //test
        try {
            const response = await fetch(`${api_url}/register`, { method: `POST` });
            const jsonData = await response.json();
            //TODO: kontrola kódu
            logged()
        } catch (e) {
            // alert(e)
        }

    })
    return <>
        <Header withoutAccount />
        <main>
            <section className='content-box'>
                <h1>Registrace</h1>
                <form /* action="scripts/login.php" method="post" */>
                    <input type="text" placeholder="Jméno" className="input-box" />
                    <input type="text" placeholder="Příjmení" className="input-box" />
                    <input type="text" placeholder="Email" className="input-box" />
                    <input type="password" placeholder="Heslo" className="input-box" />
                    <input type="password" placeholder="Heslo znovu" className="input-box" />
                    <button className='black-button' onClick={() => submit()}>Registrovat</button>
                </form>
                <hr className='dividing-line' />
                {/* <button type="button" class="login-with-google-btn">Sign up with Google</button>
                <button type="button" class="login-with-apple-btn">Sign up with Apple</button> */}
                <p>Již máte účet?</p>
                <a href='/login'><button className='black-button'>Přihlásit se</button></a>
            </section>
        </main>
        <Footer />
    </>
}