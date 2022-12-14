import React, { } from 'react';

export default function Banner({ title, message, className, children, ...rest }) {

    return <article className={`banner ${className}`} {...rest}>
        <section>
            {title && <label>{title}</label>}
            {message && <span>{message}</span>}
        </section>
        {children}
    </article>

}

