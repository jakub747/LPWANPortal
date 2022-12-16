import React, { } from 'react';

/**
 * Banner component
 * for displaying important highlighted information 
 * defaultly contains title and message
 * @param {*} param0 
 * @returns 
 */
export default function Banner({ title, message, className, children, ...rest }) {

    return <article className={`banner ${className}`} {...rest}>
        <section>
            {title && <label>{title}</label>}
            {message && <p>{message}</p>}
        </section>
        {children}
    </article>

}

