import React from 'react';

import {data} from "../../helper/dataProject";

import "../../scss/project.scss";

const Projects = () => {
    return (
        <div className="project__container">
            <h1 className="project__header">Project</h1>
            {data.map(item => <CardProject name={item.projectName} title={item.roleTitle} description={item.description} duties={item.duties} technologies={item.technologies}/>)}
        </div>
    )
}

const CardProject = ({name,title, description, duties, technologies}) => {
    return <div className="card__container">
        <div className="card__main">
            <div className="card__header">
                <h3 className="card__name">{name}</h3>
                <h4 className="card__title">{title}</h4>
            </div>
            <p className="card__description">{description}</p>
            <h4 className="card__duties">Duties:</h4>
            <ul className="card__list">
                {duties.map(duty => <li className="card__item">{duty}</li>)}
            </ul>
        </div>
        <div className="card__technologies">
            <h4 className="card__duties">Technologies:</h4>
            <ul className="card__list"> 
                {technologies.map(tech => <li className="card__item">{tech}</li>)}
            </ul>
        </div>
    </div>
}


export default Projects
