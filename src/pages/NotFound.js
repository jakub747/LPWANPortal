import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

/**
 * Page displaying a list of LPWAN networks
 * @returns 
 */
export default function NotFound({ networkID }) {

    return <>
        <Header />
        <main>
            <h1>LPWAN Portal</h1>
            <p>Tato stránka není zahrnuta v MVP verzi našeho webu. Pro přechod do hlavního menu využijte následující odkaz.</p>
            <a href='/' className='button'>Hlavní menu</a>
        </main>
        <Footer />
    </>
}

