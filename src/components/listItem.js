import React, { } from 'react';

/**
 * List item component
 * Child component of a verticaly srollable stack
 * @param {*} param0 
 * @returns 
 */
export default function ListItem({ className, children, ...rest }) {


    return <article
        className={`list_item ${className}`}
        {...rest}
    >
        {children}
    </article>
}

