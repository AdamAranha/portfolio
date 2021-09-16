import React from 'react';
import './Intro.css';
import resume from '../../Assets/ResumeV1.pdf';
import { ReactComponent as ArrowSVG } from '../assets/arrow-down.svg';



export default function Intro() {
    return (
        <div className="intro" id='intro'>
            <h2 className='section-name'>About Me</h2>
            <div className='container'>
                <div className='profile intro-section card-extraTall card-skinny'>
                    <div className='profile-background-offset'></div>
                    <div className='profile-background'>

                    </div>
                </div>
                <div className='  intro-section card-tall card-fat'>

                    <p className='name'>Adam Aranha</p>
                    <p className='description'>
                        A Full Stack Web Developer passionate about creating interactive web experiences and applications.
                    </p>
                </div>
                <div className='intro-section card-average card-fat'>
                    <a className="resume" href={resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
            </div>
            <div className='arrow' id='arrow'>
                <ArrowSVG />
            </div>
        </div>
    )
}