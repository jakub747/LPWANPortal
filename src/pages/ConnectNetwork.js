/* eslint-disable no-restricted-globals */
import { navigate } from '@reach/router';
import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import SvgIcon from '../components/icon';
import ListItem from '../components/listItem';
import Searchbar from '../components/searchbar';
import VerticalStack from '../components/verticalStack';
import { test_data } from '../data/network_data';

/**
 * Page displaying a list of LPWAN networks
 * @returns 
 */
export default function ConnectNetwork({ networkID, REST, messageError, messageSuccess, user }) {

    const data = test_data.find(x => x?.id == networkID)

    const [id, setID] = useState(null)
    const [name, setName] = useState(null)
    const [desc, setDesc] = useState(null)
    const [street, setStreet] = useState(null)
    const [zip, setZip] = useState(null)
    const [city, setCity] = useState(null)
    const [country, setCountry] = useState(null)
    const [result, setResult] = useState(true)

    const validate = () => {
        if (!id || !name || !street || !zip || !city || !country) {
            messageError('Vyplňte povinná pole s hvězdičkou');
            // setResult(false)
            return false;
        }
        return true;
    }

    const submit = useCallback(async () => {
        if (!validate()) return;
        try {
            let body = {
                name,
                description: desc || "",
                provider: {
                    providerName: data?.name,
                    deviceId: id,
                    deviceTypeId: "",
                    pac: ""
                },
                address: {
                    street,
                    city,
                    zip,
                    country
                }
            }
            const [success, result] = await REST(`POST`, `/Device`, body)
            if(!success) return messageError(`Nepodařilo se načíst data`)
            console.log({ success, result, body })
            location.replace("/")
            messageSuccess('Zařízení připojeno');
        } catch (e) {
            setResult(false)
        }

    })

    const inputClass = (param) => {
        if ((!param || param === "") && !result) return "unfilled"
        return ""
    }

    // useEffect(() => {
    //     if (result) location.replace("/")
    // }, [result])

    if (!data) return null;

    return <>
        <Header user={user} />
        <main >
            <h1>Přidání zařízení do sítě</h1>
            <p>Pro přidání zařízení do zvolené sítě, níže vyplňte jeho identifikační číslo. Číslo naleznete na samotném zařízení. Pro více informací přejděte na stránky výrobce, nebo si přečtěte náš podrobný návod.</p>
            <article className='enhanced_card'>
                <section>
                    <div><strong>{data?.name}</strong><strong></strong></div>
                    <p>{data.desc}</p>
                </section>
            </article>
            <section id='device_connection' /* action="/add_device.php" method="post" */>
                <label>Zařízení</label>
                <input className={inputClass(id)} placeholder='*Identifikační číslo' onChange={(event) => setID(event.target.value)} />
                <input className={inputClass(name)} placeholder='*Název' onChange={(event) => setName(event.target.value)} />
                <input placeholder='Popis' onChange={(event) => setDesc(event.target.value)} />

                <label>Adresa</label>
                <input className={inputClass(street)} placeholder='*Ulice a č.p.' onChange={(event) => setStreet(event.target.value)} />
                <input className={inputClass(zip)} placeholder='*PSČ' onChange={(event) => setZip(event.target.value)} />
                <input className={inputClass(city)} placeholder='*Město' onChange={(event) => setCity(event.target.value)} />
                <input className={inputClass(country)} placeholder='*Země' onChange={(event) => setCountry(event.target.value)} />

                <button className='button' onClick={() => submit()} >Připojit zařízení</button>
            </section>
            <section id="order_section">
                {/* <article className='enhanced_card'>
                    <strong>Instalační balíček</strong>
                    <p>Tento balíček je vhodný pro všechny nové uživatele.</p>
                    <a href={`/install_package`} className='button'>Objednat</a>
                </article>
                <article>
                    <section>
                        <div>
                            <a href={`/provider`} className='button'>Stránky výrobce</a>
                            <a href={`/documentation`} className='button'>Zobrazit návod</a>
                        </div>
                    </section>
                </article> */}
            </section>
        </main>
        <Footer />
    </>
}

