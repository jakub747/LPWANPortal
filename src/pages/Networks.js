import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import ListItem from '../components/listItem';
import Searchbar from '../components/searchbar';
import VerticalStack from '../components/verticalStack';

const testData = [
    {
        id: 1,
        name: "LoRaWAN",
        desc: "A long range, low power wireless networking protocol designed for the Internet of Things (IoT)",
        provider: "Actility",
        price: 128
    },
    {
        id: 2,
        name: "Sigfox",
        desc: "A global communications service provider that uses a proprietary network to connect low-power Internet of Things (IoT) devices",
        provider: "Sigfox",
        price: 128
    },
    {
        id: 3,
        name: "Weightless",
        desc: "An open standard for wireless communications in machine-to-machine (M2M) and Internet of Things (IoT) applications",
        provider: "Weightless SIG",
        price: 128
    },
    {
        id: 4,
        name: "NB-IoT",
        desc: "A low power wide area network (LPWAN) technology standardized by 3GPP for the Internet of Things (IoT)",
        provider: "Various telecommunications companies",
        price: 128
    },
    {
        id: 5,
        name: "LTE-M",
        desc: "A type of cellular communication specifically designed for the Internet of Things (IoT)",
        provider: "Various telecommunications companies",
        price: 128
    },
    {
        id: 6,
        name: "Ingenu RPMA",
        desc: "A proprietary wireless protocol designed for low power, wide area networking (LPWAN)",
        provider: "Ingenu",
        price: 128
    },
    {
        id: 7,
        name: "Symphony Link",
        desc: "A proprietary long-range, low-power wireless protocol designed for the Internet of Things (IoT)",
        provider: "Link Labs",
        price: 128
    },
    {
        id: 8,
        name: "FLora",
        desc: "A low-power wireless protocol designed for the Internet of Things (IoT)",
        provider: "OnRamp",
        price: 128
    },
    {
        id: 9,
        name: "Narrowband IoT (NB-IoT)",
        desc: "A low power wide area network (LPWAN) technology standardized by 3GPP for the Internet of Things (IoT)",
        provider: "Various telecommunications companies",
        price: 128
    },
    {
        id: 10,
        name: "Long Range Wide Area Network (LoRaWAN)",
        desc: "A long range, low power wireless networking protocol designed for the Internet of Things (IoT)",
        provider: "The LoRa Alliance",
        price: 128
    },
]

/**
 * Page displaying a list of LPWAN networks
 * @returns 
 */
export default function Networks({ networkID }) {

    const [data, setData] = useState(testData)

    // on component mount
    useEffect(() => {
        //fetch networks from server
        //setData()
    }, [])

    // const itemClick = (item) => navigate(`/networks/${item.id}`)

    const NetworkDetail = () => {
        if (!networkID) return null;

        return <main id='network_detail'>
            Detail
        </main>
    }

    return <>
        <Header />
        <main>
            <h1>LPWAN Sítě</h1>
            <Searchbar />
            <VerticalStack>
                {data?.map((item, id) => <ListItem>
                    <a className='invisible_link' href={`/networks/${item.id}`}>
                        <div><label>{item.name}</label><small>{item.provider}</small></div>
                        <div><small>{item.desc}</small><strong>{`$${item.price}`}</strong></div>
                    </a>
                </ListItem>)}
            </VerticalStack>
        </main>
        <footer>

        </footer>
        <NetworkDetail />
    </>
}

