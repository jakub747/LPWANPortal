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
export default function Networks({ networkID, api_url, user }) {

    const [data, setData] = useState(test_data)

    let getData = useCallback(async () => {
        try {
            const response = await fetch(`${api_url}/networks`);
            const jsonData = await response.json();
            //TODO: kontrola kódu
            setData(jsonData)
        } catch (e) {
            // alert(e)
        }

    })

    // on component mount
    useEffect(() => {
        getData()
    }, [])

    // const itemClick = (item) => navigate(`/networks/${item.id}`)

    return <>
        <Header user={user} />
        <main>
            <h1 id='networks_header'>LPWAN Sítě</h1>
            <Searchbar />
            <VerticalStack>
                {data?.map((item, id) => <ListItem>
                    <a className='invisible_link' href={`/networks/${item.id}`}>
                        {/* <SvgIcon name={`mdiSignal`} /> */}
                        <section>
                            <div><label>{item.name}</label><small>{item.provider}</small></div>
                            <div><small>{item.desc}</small><strong>{/* {item.currency || `$`}{item?.price} */}</strong></div>
                        </section>
                    </a>
                </ListItem>)}
            </VerticalStack>
        </main>
        <Footer />
    </>
}

