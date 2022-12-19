import React, { } from 'react';
import Header from '../components/header';
import "../styles/FormStyle.css"

/**
 * 
 * @returns Login page
 */
export default function Login() {

    return <>
        <Header />
        <main>
        <h1>Přihlášení</h1>
            <div className='main'>
                <div className='content-box'>
                    <div>
                        <input type="text" placeholder="Email" className="input-box" />
                    </div>
                    <div className='input-item'>
                        <input type="password" placeholder="Heslo" className="input-box" />
                    </div>
                    <div className='input-item'>
                        <button className='black-button'>Přihlásit</button>
                    </div>
                    <hr className='dividing-line'/>
                    <div class="signin">
                        <button type="button" class="login-with-google-btn">Sign in with Google</button>
                        <button type="button" class="login-with-apple-btn">Sign in with Apple</button>
                    </div>
                    <div className='footer-form'>
                        <p>Ještě nemáte účet?</p>
                        <a href="/register">
                            <button className='black-button'>Registrovat</button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <footer>

        </footer>
    </>
}

