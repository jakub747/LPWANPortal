import React, { } from 'react';

/**
 * Card component
 * Child component of a horizontaly srollable stack
 * @param {*} param0 
 * @returns 
 */
export default function Card({ user, id, active, title, message, img, imgalt, className, children, ...rest }) {

    const styles = {}

    // if (img) styles.background = `url("${img}")`

    return <a
        href={`/networks/${id}`}
        className={`card invisible_link ${className}`}
        style={styles}
        {...rest}
    >
        {img && <img src={img} alt={imgalt} />}
        <div className='card_text'>
            {title && <label>{title}</label>}
            {message && <p>{message}</p>}
            {children}
            {user && active && <a href={`/connect/${id}`} className='button'>Připojit</a>}
        </div>
    </a>
}

