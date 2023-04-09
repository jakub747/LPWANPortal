/* eslint-disable no-restricted-globals */
import { navigate } from '@reach/router';
import React, { useCallback } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import "../styles/FormStyle.css"
import { useState } from 'react';

/**
 * 
 * @returns Regstration page
 */
export default function Registration({ REST, loggedIn, messageError }) {

    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [email, setEmail] = useState(null)
    const [password1, setPassword1] = useState(null)
    const [password2, setPassword2] = useState(null)

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

    const validate = () => {
        if (!name || !surname || !email || !password1 || !password2) {
            messageError('Všechna pole musí být vyplněna');
            return false;
        }
        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.{8,})\S+$/;
        if (!passwordRegex.test(password1)) {
            messageError('Heslo musí obsahovat alespoň jedno velké písmeno, jedno malé písmeno a musí být dlouhé alespoň 8 znaků.', 3000);
            return false;
        }
        if (password1 !== password2) {
            messageError('Hesla se musí shodovat');
            return false;
        }
        return true;
    }


    const submit = async () => {
        if (!validate()) return;
        try {
            const [success, result] = await REST(`POST`, `/Account/register`, {
                firstName: name,
                surname,
                email,
                password: password1,
                username: `${name}_${surname}`
            }, true)
            if (!success) return messageError(`Registrace se nezdařila`)
            logged(result)
        } catch (e) {
            messageError(`Registrace se nezdařila`)
        }
    }

    return <>
        <Header withoutAccount />
        <main>
            <section className='content-box'>
                <h1>Registrace</h1>
                <section /* action="scripts/login.php" method="post" */>
                    <input type="text" placeholder="Jméno" className="input-box" onChange={(event) => setName(event.target.value)} />
                    <input type="text" placeholder="Příjmení" className="input-box" onChange={(event) => setSurname(event.target.value)} />
                    <input type="text" placeholder="Email" className="input-box" onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder="Heslo" className="input-box" onChange={(event) => setPassword1(event.target.value)} />
                    <input type="password" placeholder="Heslo znovu" className="input-box" onChange={(event) => setPassword2(event.target.value)} />
                    <button className='black-button' onClick={() => submit()}>Registrovat</button>
                </section>
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