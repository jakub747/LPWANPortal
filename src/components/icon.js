import React, { } from 'react';
import Icon from '@mdi/react';
import * as MaterialDesignIcons from '@mdi/js';


export default function SvgIcon({ name, ...rest }) {

    const getIcon = (icon_name) => {
        try {
            return MaterialDesignIcons[icon_name.trim()];
        } catch (e) {
            return null;
        }
    }

    const icon = getIcon(name)

    if (!icon) return null;

    return <Icon className={`icon`} path={icon} {...rest} />
}