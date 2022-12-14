import React, { } from 'react';
import CustomIcon from './icon';

function Header() {

    return <header>
        <CustomIcon name={`mdiMenu`} />
        <CustomIcon name={`mdiAccount`} />
    </header>
}

export default Header;
