import React, { } from 'react';
import CustomIcon from './icon';

/**
 * Header component
 * Static header in the tom of the screen 
 * Comntains Menu icon (left), Account icon (right), logo+motto (mid)
 */
function Header() {

    return <header>
        <section>
            <CustomIcon name={`mdiMenu`} />
        </section>
        <section>
            
        </section>
        <section>
            <CustomIcon name={`mdiAccount`} />
        </section>
    </header>
}

export default Header;
