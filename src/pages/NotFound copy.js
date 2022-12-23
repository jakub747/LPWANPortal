import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

/**
 * Page displaying a list of LPWAN networks
 * @returns 
 */
export default function Account({ networkID, user }) {

    return <>
        <Header user={user} />
        <main>
            <h1>{user?.name} {user?.surname}</h1>
            <a href='/' onClick={() => { localStorage.removeItem("user") }} className='button'>Odhlásit</a>
        </main>
        <Footer />
    </>
}

