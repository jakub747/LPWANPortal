import React, { } from 'react';
import SvgIcon from './icon';
import CustomIcon from './icon';

/**
 * Header component
 * Static header in the tom of the screen 
 * Comntains Menu icon (left), Account icon (right), logo+motto (mid)
 */
function Header({ user, withoutAccount }) {

    return <header>
        <section>
            <CustomIcon name={`mdiMenu`} /* onClick={() => toggleMenu()}  */ />
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
            {!withoutAccount && <a href={user ? 'profile' : 'login'} className='invisible_link'>
                <CustomIcon name={`mdiAccount`} />
            </a>}
        </section>
    </header>
}

export default Header;
