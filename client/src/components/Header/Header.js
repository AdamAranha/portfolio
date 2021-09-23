import React from 'react';
import SVGUser from '../assets/user.svg';
import SVGSkills from '../assets/file-code.svg';
import SVGProjects from '../assets/browser.svg';
import SVGContact from '../assets/contact.svg';

export default function Header() {

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

    return (
        <div className="header">
            <div className='fullscreen'>
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
        </div>
    )
}