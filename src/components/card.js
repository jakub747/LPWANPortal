import React, { } from 'react';

/**
 * Card component
 * Child component of a horizontaly srollable stack
 * @param {*} param0 
 * @returns 
 */
export default function Card({ title, message, img, className, children, ...rest }) {

    const styles = {}

    if (img) styles.background = `url("${img}")`

    return <article
        className={`card ${className}`}
        style={styles}
        {...rest}
    >
        {title && <label>{title}</label>}
        {message && <p>{message}</p>}
        {/* {img && <img src={img} />} */}
        {children}
    </article>
}

