import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
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
export default function ConnectNetwork({ networkID }) {

    const data = test_data.find(x => x?.id == networkID)

    // on component mount
    useEffect(() => {
        //fetch network details from server
        //setData()
    }, [])

    if (!data) return null;

    return <>
        <Header />
        <main id='device_connection'>
            <h1>Přidání zařízení do sítě</h1>
            <p>Pro přidání zařízení do zvolené sítě, níže vyplňte jeho identifikační číslo. Číslo naleznete na samotném zařízení. Pro více informací přejděte na stránky výrobce, nebo si přečtěte náš podrobný návod.</p>
            <article className='enhanced_card'>
                <section>
                    <div><strong>{data?.name}</strong><strong>CZK{data?.price}</strong></div>
                    <p>{data.desc}</p>
                </section>
            </article>
            <form id='device_connection'>
                <input />
                <input />
                <button>Připojit zařízení</button>
            </form>
            <section id="order_section">
                <article className='enhanced_card'>
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
                </article>
            </section>
        </main>
    </>
}

