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
export default function NetworkDetail({ networkID }) {

    const data = test_data.find(x => x?.id == networkID)

    // on component mount
    useEffect(() => {
        //fetch additional network details from server
        //setData(fetchedData)
    }, [])

    if (!data) return null;

    return <>
        <Header />
        <main>
            <h1>{data?.name}</h1>
            <VerticalStack>
                <strong>{data.currency || `$`}{data?.price}</strong>
                <p>{data?.desc}</p>
            </VerticalStack>
            <VerticalStack title={`Pokrytí`}>
                {data?.coverage?.map((item, id) => <ListItem key={id}>
                    <SvgIcon name={`mdiMapMarker`} />
                    <section>
                        <div>
                            <label>{item?.location}</label>
                            <strong>{Math.ceil(item?.percentage)}%</strong>
                        </div>
                    </section>
                </ListItem>)}
            </VerticalStack>
            <section id="order_section">
                <article className='enhanced_card'>
                    <strong>Instalační balíček</strong>
                    <p>Tento balíček je vhodný pro všechny nové uživatele.</p>
                    <a href={`/install_package`} className='button'>Objednat</a>
                </article>
                <article>
                    <a href={`/connect/${networkID}`} className='button'>Připojit zařízení</a>
                </article>
            </section>
        </main>
    </>
}

