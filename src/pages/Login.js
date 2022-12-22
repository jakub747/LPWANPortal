import React, { } from 'react';
import Header from '../components/header';
import "../styles/FormStyle.css"

/**
 * 
 * @returns Login page
 */
export default function Login({ loggedIn }) {

    const logged = () => {
        loggedIn({ username: `testuser`, name: `Test`, surname: `User` })
    }

    return <>
        <Header />
        <main>
            <section className='content-box'>
                <h1>Přihlášení</h1>
                <form action="/sign_in.php" method="post">
                    <input type="text" placeholder="Email" className="input-box" />
                    <input type="password" placeholder="Heslo" className="input-box" />
                    <button className='black-button'>Přihlásit</button>
                </form>
                <hr className='dividing-line' />
                <button type="button" class="login-with-google-btn">Sign in with Google</button>
                <button type="button" class="login-with-apple-btn">Sign in with Apple</button>
                <p>Ještě nemáte účet?</p>
                <a href="/register"><button className='black-button'>Registrovat</button></a>
            </section>
        </main>
    </>
}

