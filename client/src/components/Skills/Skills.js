import React from 'react';
import { ReactComponent as HTMLSVG } from '../assets/icon-html.svg'
import { ReactComponent as CSSSVG } from '../assets/icon-css.svg'
import { ReactComponent as JSSVG } from '../assets/icon-js.svg'
import { ReactComponent as SassSVG } from '../assets/icon-sass.svg'
import { ReactComponent as ReactSVG } from '../assets/icon-react.svg'
import { ReactComponent as NodeSVG } from '../assets/icon-node.svg'
import { ReactComponent as DatabaseSVG } from '../assets/icon-database.svg'



export default function Skills() {

    const skillSet = [
        {
            name: 'HTML5',
            img: <HTMLSVG />
        }, {
            name: 'CSS',
            img: <CSSSVG />
        }, {
            name: 'JavaScript',
            img: <JSSVG />
        }, {
            name: 'Sass',
            img: <SassSVG />
        }, {
            name: 'React',
            img: <ReactSVG />
        }, {
            name: 'Express',
            img: <NodeSVG />
        }, {
            name: 'Node',
            img: <NodeSVG />
        }, {
            name: 'Databases',
            img: <DatabaseSVG />
        }
    ]
    return (
        <div className='skills' id='skills'>
            <h2 className='section-name'>Skills</h2>
            <div className='container-shadow'></div>
            <div className='container'>
                {/* <div className='skill-box'></div>
                <div className='skill-box'></div>
                <div className='skill-box'></div>
                <div className='skill-box'></div> */}
                {skillSet.map(skill => {
                    return (
                        <div className='skill-box'>

                            <div className='svg'>{skill.img}</div>
                            <p className='skill-name'>{skill.name}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}