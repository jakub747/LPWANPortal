import React, { } from 'react';
import CustomIcon from './icon';

/**
 * Header component
 * Static header in the tom of the screen 
 * Comntains Menu icon (left), Account icon (right), logo+motto (mid)
 */
function Header() {

    return <header>
        <CustomIcon name={`mdiMenu`} />
        <CustomIcon name={`mdiAccount`} />
    </header>
}

export default Header;
