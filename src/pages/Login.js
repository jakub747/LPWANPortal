import { navigate } from '@reach/router';
import React, { } from 'react';
import Header from '../components/header';
import "../styles/FormStyle.css"

/**
 * 
 * @returns Login page
 */
export default function Login({ loggedIn }) {

    const logged = () => {
        localStorage.setItem("user", JSON.stringify({ username: `testuser`, name: `Test`, surname: `User` }))
    }

    const submit = () => {
        //POST ajax login 
        logged()
        navigate("/")
    }

    return <>
        <Header withoutAccount />
        <main>
            <section className='content-box'>
                <h1>Přihlášení</h1>
                <form /* action="login.php" method="post" */>
                    <input type="text" placeholder="Email" className="input-box" />
                    <input type="password" placeholder="Heslo" className="input-box" />
                    <button type="submit" className='black-button' onClick={() => submit()}>Přihlásit</button>
                </form>
                <hr className='dividing-line' />
                {/* <button type="button" class="login-with-google-btn">Sign in with Google</button>
                <button type="button" class="login-with-apple-btn">Sign in with Apple</button> */}
                <p>Ještě nemáte účet?</p>
                <a href="/register"><button className='black-button'>Registrovat</button></a>
            </section>
        </main>
    </>
}

