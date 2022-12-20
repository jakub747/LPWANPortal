import React, { } from 'react';
import SvgIcon from './icon';
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
            <a className='logo invisible_link' href='/'>
                <SvgIcon name={`mdiShareVariantOutline`} />
                <div>
                    <label>resNET</label>
                    <p>Připoj to!</p>
                </div>
            </a>
        </section>
        <section>
            <CustomIcon name={`mdiAccount`} />
        </section>
    </header>
}

export default Header;
