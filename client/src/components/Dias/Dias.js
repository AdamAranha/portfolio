import React from 'react';
import Sun from '../assets/sun.svg';
import Moon from '../assets/moon.svg';

export default function Dias() {

    let deg = 0;
    let mode = 'dark';

    function switchMode() {
        const duration = 400;
        let moonOpacity;
        let sunOpacity;

        function shortcut(element) { return document.querySelector(element) }

        deg += 720;
        shortcut('.switch-container').animate([{ transform: `rotate(${deg}deg)` }],
            { duration, fill: 'forwards' });

        if (mode === 'dark') {
            moonOpacity = 0;
            sunOpacity = 1;
            mode = 'light'
        } else {
            moonOpacity = 1;
            sunOpacity = 0;
            mode = 'dark'
        }
        shortcut('.switch-moon').animate([{ opacity: moonOpacity }],
            { duration, fill: 'forwards' });
        shortcut('.switch-sun').animate([{ opacity: sunOpacity }],
            { duration, fill: 'forwards' });

        hitServer();
    }

    async function hitServer() {
        const res = await fetch('/server', {
            method: 'GET'
        }).then(r => r.json());
        console.log(res);
    }

    return (
        <div className='switch-wrapper' >
            <div className='switch-container' onClick={() => switchMode()}>
                <img className='switch-sun' src={Sun} alt='sun' />
                <img className='switch-moon' src={Moon} alt='moon' />
            </div>
        </div>
    )
}