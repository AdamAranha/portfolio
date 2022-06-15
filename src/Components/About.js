import React, { useEffect, useState } from 'react';
import '../Styles/About.css';
import kenobi from '../Assets/kenobi2.png';
import tictactoe from '../Assets/tictactoe.svg';

const About = ()=>{

    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    return (
        <div className='about' id='about'>
        <img id='tictactoe' src={tictactoe} style={{transform: ` rotate(15deg) translateY(${offsetY * 0.5}px)`}}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus pretium quam vulputate.</p>
        <h1><span id='adam'>Adam</span> Aranha</h1>
        <h4>Hello there, my name is</h4>
        <img className='kenobi'src={kenobi}/>
        </div>
    )
}

export default About