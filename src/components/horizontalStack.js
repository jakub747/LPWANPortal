import React, { } from 'react';

export default function HorizontalStack({ title, className, children, ...rest }) {

    return <>
        <h3>{title}</h3>
        <section className={`horizontal_stack ${className}`} {...rest}>
            {children}
        </section>
    </>
}

