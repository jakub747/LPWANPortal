import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import ListItem from '../components/listItem';
import VerticalStack from '../components/verticalStack';

let testData = [
    {
        name: `Network`,
        desc: `Short description of the network`,
        provider: `Provider`,
        price: 128
    },
    {
        name: `Network`,
        desc: `Short description of the network`,
        provider: `Provider`,
        price: 128
    },
    {
        name: `Network`,
        desc: `Short description of the network`,
        provider: `Provider`,
        price: 128
    },
    {
        name: `Network`,
        desc: `Short description of the network`,
        provider: `Provider`,
        price: 128
    },
    {
        name: `Network`,
        desc: `Short description of the network`,
        provider: `Provider`,
        price: 128
    },
    {
        name: `Network`,
        desc: `Short description of the network`,
        provider: `Provider`,
        price: 128
    },
    {
        name: `Network`,
        desc: `Short description of the network`,
        provider: `Provider`,
        price: 128
    },
]

/**
 * Page displaying a list of LPWAN networks
 * @returns 
 */
export default function Networks() {

    const [data, setData] = useState(testData)

    // on component mount
    useEffect(() => {
        //fetch networks from server
        //setData()
    }, [])

    return <>
        <Header />
        <main>
            <h1>LPWAN Sítě</h1>
            <VerticalStack>
                {data?.map((item, id) => <ListItem>
                    <div><label>{item.name}</label><small>{item.provider}</small></div>
                    <div><small>{item.desc}</small><strong>{`$${item.price}`}</strong></div>
                </ListItem>)}
            </VerticalStack>
        </main>
        <footer>

        </footer>
    </>
}

