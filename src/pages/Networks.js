import React, { useEffect, useState } from 'react';
import Header from '../components/header';

/**
 * Page displaying a list of LPWAN networks
 * @returns 
 */
export default function Networks() {

    const [data, setData] = useState(null)

    // on component mount
    useEffect(() => {
        //fetch networks from server
        //setData()
    }, [])

    return <>
        <Header />
        <main>
            <h1>LPWAN Sítě</h1>
        </main>
        <footer>

        </footer>
    </>
}

