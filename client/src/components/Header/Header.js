import React, { useEffect } from 'react';
import './Header.css';
import resume from '../../Assets/ResumeV1.pdf';
import { ReactComponent as HamburgerMenu } from '../assets//hamburger-menu.svg'
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
        return function cleanUpListeners() {
            headers.forEach(header => {
                const { id, name } = header;
                document.getElementById(name).removeEventListener('click', () => jumpToSection(id));
            })
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
                            <div>
                                <li className='links' id={header.name} key={header.name}>
                                    <div className='svg'>{header.img} </div>
                                    <div className='header-name'>{header.name}</div>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className='mobile'>
                <HamburgerMenu />
            </div>
        </div>
    )
}