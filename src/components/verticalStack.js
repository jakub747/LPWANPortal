import React, { } from 'react';

/**
 * Horizontaly scrollable component with a title
 * @param {*} param0 
 * @returns 
 */
export default function VerticalStack({ title, className, children, ...rest }) {

    return <>
        {title && <h3>{title}</h3>}
        <section className={`vertical_stack ${className}`} {...rest}>
            {children}
        </section>
    </>
}

