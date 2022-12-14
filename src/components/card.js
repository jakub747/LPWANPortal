import React, { } from 'react';

export default function Card({ title, message, img, className, children, ...rest }) {

    const styles = {}

    if (img) styles.background = `url("${img}")`

    return <article
        className={`card ${className}`}
        style={styles}
        {...rest}
    >
        {title && <label>{title}</label>}
        {message && <span>{message}</span>}
        {/* {img && <img src={img} />} */}
        {children}
    </article>
}

