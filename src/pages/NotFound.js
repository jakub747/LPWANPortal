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
export default function NotFound({ networkID }) {

    return <>
        <Header />
        <main>
            <h1>LPWAN Portal</h1>
            <p>Tato stránka není zahrnuta v MVP verzi našeho webu. Pro přechod do hlavního menu využijte následující odkaz.</p>
            <a href='/' className='button'>Hlavní menu</a>
        </main>
        <footer>

        </footer>
    </>
}

