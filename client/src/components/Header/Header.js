import React from 'react';
import SVGUser from '../assets/user.svg';
import SVGSkills from '../assets/file-code.svg';
import SVGProjects from '../assets/browser.svg';
import SVGContact from '../assets/contact.svg';
import Dias from '../Dias/Dias';
import Sun from '../assets/sun.svg';
import Moon from '../assets/moon.svg';

export default function Header() {
    let deg = 0;
    let mode = 'dark';

    const headers = [{
        name: 'About Me',
        id: 'intro',
        img: SVGUser
    }, {
        name: 'Skills',
        id: 'skills',
        img: SVGSkills
    }, {
        name: 'Projects',
        id: 'projects',
        img: SVGProjects
    }, {
        name: 'Contact',
        id: 'contact',
        img: SVGContact
    }]

    function switchMode() {
        const duration = 400;
        let moonOpacity;
        let sunOpacity;


        function shortcut(element) { return document.querySelector(element) }

        console.log('Click Registered')
        deg += 720;
        shortcut('.switch-container').animate([
            { transform: `rotate(${deg}deg)` }

        ], {
            duration: duration,
            fill: 'forwards'
        });

        if (mode === 'dark') {
            moonOpacity = 0;
            sunOpacity = 1;
            mode = 'light'
        } else {
            moonOpacity = 1;
            sunOpacity = 0;
            mode = 'dark'
        }
        shortcut('.switch-moon').animate([
            { opacity: moonOpacity }
        ], {
            duration: duration,
            fill: 'forwards'
        });
        shortcut('.switch-sun').animate([
            { opacity: sunOpacity }
        ], {
            duration: duration,
            fill: 'forwards'
        })

    }

    return (
        <div className="header">
            {/* <Dias /> */}
            <div className='switch-wrapper' >
                <div className='switch-container' onClick={() => switchMode()}>
                    <img className='switch-sun' src={Sun} alt='sun' />
                    <img className='switch-moon' src={Moon} alt='moon' />
                </div>
            </div>
            <ul className='links-group'>

                {headers.map(header => {
                    return (
                        <li className='links' id={header.name} key={header.name} alt={header.name}>
                            <img className='svg' src={header.img} alt={header.name} />
                            <div className='header-name'>{header.name}</div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}