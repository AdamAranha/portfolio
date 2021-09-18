import React from 'react';
import { ReactComponent as HTMLSVG } from '../assets/icon-html.svg'
import { ReactComponent as CSSSVG } from '../assets/icon-css.svg'
import { ReactComponent as JSSVG } from '../assets/icon-js.svg'
import { ReactComponent as SassSVG } from '../assets/icon-sass.svg'
import { ReactComponent as ReactSVG } from '../assets/icon-react.svg'
import { ReactComponent as NodeSVG } from '../assets/nodejs-icon.svg'
import { ReactComponent as MySQLSVG } from '../assets/icon-mysql.svg'
import { ReactComponent as MongoDBSVG } from '../assets/icon-mongodb.svg'
import { ReactComponent as GitHubSVG } from '../assets/icon-github.svg'



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
            name: 'Node/Express',
            img: <NodeSVG />
        }, {
            name: 'MySQL Databases',
            img: <MySQLSVG />
        }, {
            name: 'MongoDB Databases',
            img: <MongoDBSVG />
        }, {
            name: 'GitHub',
            img: <GitHubSVG />
        }
    ]
    return (
        <div className='skills' id='skills'>
            <div className='section-title'>
                <h2 className='section-name'>Skills</h2>
            </div>
            {/* <div className='container-shadow'></div> */}
            <div className='container'>
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