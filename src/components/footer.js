import React, { } from 'react';
import SvgIcon from './icon';
import CustomIcon from './icon';

/**
 * Header component
 * Static header in the tom of the screen 
 * Comntains Menu icon (left), Account icon (right), logo+motto (mid)
 */
export default function Footer() {

    return <footer>
        <section>
            <div>
                <a href='/example_link'>Informace o nákupu</a>
                <a href='/example_link'>Doručení</a>
                <a href='/example_link'>Platby</a>
                <a href='/example_link'>Obchodní podmínky</a>
                <a href='/example_link'>Ochrana osobních údajů</a>
                <a href='/example_link'>Služby</a>
            </div>
            <div>
                <a href='/example_link'>Předplatné</a>
                <a href='/example_link'>Objednávky</a>
                <a href='/example_link'>Sledování objednávek</a>
                <a href='/example_link'>Reklamace</a>
                <a href='/example_link'>Časté dotazy</a>
            </div>
            <div>
                <a href='/example_link'>Kontakt</a>
                <a href='/example_link'>Pro média</a>
                <a href='/example_link'>Facebook</a>
                <a href='/example_link'>Twitter</a>
                <a href='/example_link'>Newsletter</a>
            </div>
        </section>
        <section>
            <a className='logo invisible_link' href='/'>
                <SvgIcon name={`mdiShareVariantOutline`} />
                <div>
                    <label>resNET</label>
                    <p>Připoj to!</p>
                </div>
            </a>
        </section>
    </footer>
}

