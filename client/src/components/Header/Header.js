import React, { useEffect } from 'react';
import { ReactComponent as UserSVG } from '../assets/user.svg';
import { ReactComponent as ProjectsSVG } from '../assets/file-code.svg';
import { ReactComponent as BrowserSVG } from '../assets/browser.svg';
import { ReactComponent as ContactSVG } from '../assets/contact.svg';




export default function Header() {

    useEffect(() => {
        function jumpToSection(id) { document.getElementById(id).scrollIntoView({ behavior: 'smooth' }); }

        headers.forEach(header => {
            const { id, name } = header;
            document.getElementById(name).addEventListener('click', () => jumpToSection(id));
        })
        document.getElementById('arrow').addEventListener('click', () => jumpToSection('skills'))
        return function cleanUpListeners() {
            headers.forEach(header => {
                const { id, name } = header;
                document.getElementById(name).removeEventListener('click', () => jumpToSection(id));
            })
            document.getElementById('arrow').removeEventListener('click', () => jumpToSection('skills'))

        }
    })

    const headers = [{
        name: 'About Me',
        id: 'intro',
        img: <UserSVG />
    }, {
        name: 'Skills',
        id: 'skills',
        img: <ProjectsSVG />
    }, {
        name: 'Projects',
        id: 'projects',
        img: <BrowserSVG />
    }, {
        name: 'Contact',
        id: 'contact',
        img: <ContactSVG />
    }]

    return (
        <div className="header">
            <div className='fullscreen'>
                <ul className='links-group'>
                    {headers.map(header => {
                        return (
                            <li className='links' id={header.name} key={header.name} alt={header.name}>
                                <div className='svg'>{header.img} </div>
                                <div className='header-name'>{header.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}