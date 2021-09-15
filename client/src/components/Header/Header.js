import React, { useEffect } from 'react';
import './Header.css';
import resume from '../../Assets/ResumeV1.pdf';
import { ReactComponent as HamburgerMenu } from './hamburger-menu.svg'



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
        id: 'intro'
    }, {
        name: 'Projects',
        id: 'projects'
    }]

    return (
        <div className="header">
            <div className='fullscreen'>
                <ul className='links-group'>
                    {headers.map(header => {
                        return (
                            <li className='links' id={header.name} key={header.name}>{header.name}</li>
                        )
                    })}
                    <li className='links'>
                        <a className='resume-link' href={resume} target='_blank' rel='noreferrer'><span className='bracket'>[</span>Resume<span className='bracket'>]</span></a>
                    </li>
                </ul>
            </div>
            <div className='mobile'>
                <HamburgerMenu />
            </div>
        </div>
    )

}