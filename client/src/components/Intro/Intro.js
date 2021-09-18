import React from 'react';
import resume from '../../Assets/ResumeV1.pdf';
import { ReactComponent as ArrowSVG } from '../assets/arrow-down.svg';


export default function Intro() {
    return (
        <div className="intro" id='intro'>
            <div className='section-title'>
                <h2 className='section-name'>About Me</h2>
            </div>
            <div className='container'>
                <div className='picture-section'>
                    <div className='picture-background-shadow'></div>
                    <div className='picture-background'></div>

                </div>
                <div className='description-section'>
                    <p> A Full Stack Web Developer passionate about creating interactive web experiences and applications.</p>
                </div>
                <div className='links-section'>
                    <a className="resume" href={resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
            </div>
            <div className='arrow' id='arrow'>
                <ArrowSVG />
            </div>
        </div>
    )
}