import React, { } from 'react';
import Header from '../components/header';
import "../styles/FormStyle.css"

/**
 * 
 * @returns Regstration page
 */
export default function Regstration() {

    return <>
        <Header />
        <main>
        <h1>Registrace</h1>
            <div className='main'>
                <div className='content-box'>
                    <div>
                        <input type="text" placeholder="Jméno" className="input-box" />
                    </div>
                    <div className='input-item'>
                        <input type="text" placeholder="Příjmení" className="input-box" />
                    </div>
                    <div className='input-item'>
                        <input type="text" placeholder="Email" className="input-box" />
                    </div>
                    <div className='input-item'>
                        <input type="password" placeholder="Heslo" className="input-box" />
                    </div>
                    <div className='input-item'>
                        <input type="password" placeholder="Heslo znovu" className="input-box" />
                    </div>
                    <div className='input-item'>
                        <button className='black-button'>Registrovat</button>
                    </div>
                    <hr className='dividing-line'/>
                    <div class="signin">
                        <button type="button" class="login-with-google-btn">Sign up with Google</button>
                        <button type="button" class="login-with-apple-btn">Sign up with Apple</button>
                    </div>
                    <div className='footer-form'>
                        <p>Již máte účet?</p>
                        <a href='/login'>
                            <button className='black-button'>Přihlásit se</button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <footer>

        </footer>
    </>
}