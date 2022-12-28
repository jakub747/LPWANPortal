import React, { } from 'react';
import SvgIcon from './icon';

/**
 * Searchbar component 
 * @param {*} param0 
 * @returns 
 */
export default function Searchbar({ hint, className, ...rest }) {

    return <form className={`searchbar ${className}`} action="/search.php" method="get">
        <SvgIcon name="mdiMagnify"/>
        <input placeholder="Vyhledat" />
    </form >
}