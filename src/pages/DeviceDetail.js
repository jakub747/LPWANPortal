/* eslint-disable no-restricted-globals */
import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import SvgIcon from '../components/icon';
import ListItem from '../components/listItem';
import Searchbar from '../components/searchbar';
import VerticalStack from '../components/verticalStack';
import { test_data } from '../data/network_data';
import { useCallback } from 'react';

/**
 * Page displaying a list of LPWAN networks
 * @returns 
 */
export default function DeviceDetail({ deviceID, REST, messageSuccess, messageError, user }) {

    const [data, setData] = useState(test_data)

    let getData = useCallback(async () => {
        try {
            const [success, result] = await REST(`GET`, `/Device/${deviceID}`)
            if (!success) return messageError(`Nepodařilo se načíst data`)
            setData(result)
        } catch (e) {
            // alert(e)
        }

    })

    let deleteDevice = useCallback(async () => {
        try {
            const [success, result] = await REST(`DELETE`, `/Device/${deviceID}`)
            if (!success) return messageError(`Zařízení se nepodařilo smazat`)
            location.replace("/")
            messageSuccess(``)
        } catch (e) {
            // alert(e)
        }

    })

    // on component mount
    useEffect(() => {
        getData()
    }, [])

    if (!data) return null;

    return <>
        <Header user={user} />
        {data && <main>
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>
            <h3>Poskytovatel</h3>
            <p>{data?.provider?.providerName}</p>
            <h3>Umístění</h3>
            <p>{data?.addressView?.street}<br />{data?.addressView?.zip} {data?.addressView?.city} ({data?.addressView?.country})</p>
            <section id="order_section">
                <article>
                    <button className='button' onClick={() => deleteDevice()}>Odstranit zařízení</button>
                </article>
            </section>
        </main>}
        <Footer />
    </>
}

