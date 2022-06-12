import React, { useEffect } from 'react';
import '../Styles/Navbar.css';

import AboutSVG from '../Assets/About.svg';
import SkillsSVG from '../Assets/Skills.svg';
import ProjectsSVG from '../Assets/Projects.svg';
import ContactSVG from '../Assets/Contact.svg';

const Navbar = ()=>{

    useEffect(()=>{
        let navbar = document.getElementById('navbar');
        const showNav= () => {
                if (window.scrollY > scrollPos) {
                    navbar.style.bottom = '-100px';
                    } else {
                        navbar.style.bottom = '0';
                    }
                    scrollPos = window.scrollY;
            }
       if(window.screen.width < 1366) {
            var scrollPos = 0;
            window.addEventListener('scroll', ()=>showNav());
       }

        const jumpToSection = (id) => document.getElementById(id).scrollIntoView({behavior:'smooth'});
        headers.forEach(({id,name})=> {
            document.getElementById(name).addEventListener('click',()=>jumpToSection(id));
        })
        return function cleanUpListeners() {
            headers.forEach(({id,name}) => {
                document.getElementById(name).removeEventListener('click', () => jumpToSection(id));
            })
            window.removeEventListener('scroll',()=>showNav());
        }
    }, [])

    const headers = [{
        name: 'About Me',
        id: 'about',
        img: AboutSVG
    }, {
        name: 'Skills',
        id: 'skills',
        img: SkillsSVG
    },{
        name: 'Projects',
        id: 'projects',
        img: ProjectsSVG
    },{
        name: 'Contact',
        id: 'contact',
        img: ContactSVG
    }]

    return (
        <div className='navbar' id='navbar'>
            <ul>
                {headers.map(({name,img}) => {
                    return (
                        <li id={name} key={name}>
                           <img src={img}/>
                           <p>{name}</p>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Navbar