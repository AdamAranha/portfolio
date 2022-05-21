import React, { useEffect } from 'react';
import SVGUser from '../assets/user.svg';
import SVGSkills from '../assets/file-code.svg';
import SVGProjects from '../assets/browser.svg';
import SVGContact from '../assets/contact.svg';
import Dias from '../Dias/Dias';

export default function Header() {


    useEffect(() => {
        function jumpToSection(id) { document.querySelector(`.${id}-section`).scrollIntoView({ behavior: 'smooth' }); }

        headers.forEach(header => {
            const { id, name } = header;
            document.getElementById(name).addEventListener('click', () => jumpToSection(id));
        })
        // document.getElementById('arrow').addEventListener('click', () => jumpToSection('skills'))
        return function cleanUpListeners() {
            headers.forEach(header => {
                const { id, name } = header;
                document.getElementById(name).removeEventListener('click', () => jumpToSection(id));
            })
            // document.getElementById('arrow').removeEventListener('click', () => jumpToSection('skills'))
        }
    })

    const headers = [{
        name: 'About Me',
        id: 'about',
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

    return (
        <div className="header">
            <Dias />
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