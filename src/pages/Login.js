/* eslint-disable no-restricted-globals */
import { navigate } from '@reach/router';
import React, { useCallback } from 'react';
import Header from '../components/header';
import "../styles/FormStyle.css"
import { useState } from 'react';
import { useEffect } from 'react';

/**
 * 
 * @returns Login page
 */
export default function Login({ loggedIn, REST, api_url }) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    // const [result, setResult] = useState(null)

    const logged = (result) => {
        let user = {
            username: result?.username,
            name: result?.firstName,
            surname: result?.surname,
            token: result.token
        }
        loggedIn(user)
        location.replace("/")
    }

    const submit = async () => {
        if (!api_url) return navigate("/"); //test
        try {
            const [success, result] = await REST(`POST`, `/Account/login`, { email, password })
            if (success) logged(result)
        } catch (e) {
            alert(e)
        }
    }

    // useEffect(() => {
    //     if(result) logged(result)
    // }, [result])

    return <>
        <Header withoutAccount />
        <main>
            <section className='content-box'>
                <h1>Přihlášení</h1>
                <section /* action="login.php" method="post" */>
                    <input type="text" placeholder="Email" className="input-box" onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder="Heslo" className="input-box" onChange={(event) => setPassword(event.target.value)} />
                    <button /* type="submit" */ className='black-button' onClick={() => submit()}>Přihlásit</button>
                </section>
                <hr className='dividing-line' />
                {/* <button type="button" class="login-with-google-btn">Sign in with Google</button>
                <button type="button" class="login-with-apple-btn">Sign in with Apple</button> */}
                <p>Ještě nemáte účet?</p>
                <a href="/register"><button className='black-button'>Registrovat</button></a>
            </section>
        </main>
    </>
}

