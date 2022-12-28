import React, { } from 'react';
import SvgIcon from './icon';
import CustomIcon from './icon';

/**
 * Header component
 * Static header in the tom of the screen 
 * Comntains Menu icon (left), Account icon (right), logo+motto (mid)
 */
function Header({ user, toggleMenu, withoutAccount }) {

    return <header>
        <div className='content'>
            <section>
                <CustomIcon onClick={window?.toggleMenu} name={`mdiMenu`} /* onClick={() => toggleMenu()}  */ />
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
        </div>
    </header>
}

export default Header;
