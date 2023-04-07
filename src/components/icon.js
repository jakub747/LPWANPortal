import React, { } from 'react';
import Icon from '@mdi/react';
import * as MaterialDesignIcons from '@mdi/js';

/**
 * SVG icon component 
 * SVG source from MDI https://materialdesignicons.com
 * @param {*} param0 
 * @returns 
 */
export default function SvgIcon({ name, className, ...rest }) {

    const getIcon = (icon_name) => {
        try {
            return MaterialDesignIcons[icon_name.trim()];
        } catch (e) {
            return null;
        }
    }

    const icon = getIcon(name)

    if (!icon) return null;

    return <Icon className={`icon ${className}`} path={icon} {...rest} />
}