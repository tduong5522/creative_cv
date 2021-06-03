import React from 'react'

import {experiences, education, professionalSkills, skills, languages} from "../../share/dataResume";

import "../../scss/resume.scss";



const Resume = () => {
    return (
        <div className="resume__container">
            <h1 className="resume__header"> Resume</h1>
            <section className="resume__experience">
                <h2 className="resume__title">
                    Experience
                </h2>
                {experiences.map(experience => <CardResume time={experience.time} title={experience.jobTitle} subTitle={experience.companyName} description={experience.descriptionTask}/>)}
            </section>
            <section className="resume__education">
                <h2 className="resume__title">
                   Education
                </h2>
                
            </section>
            <section className="resume__skill">
                <h2 className="resume__title">
                   Skill
                </h2>
                <ResumeList list={skills}/>
            </section>
            <section className="resume__professional-skill">
                <h2 className="resume__title">
                    Professional skillset
                </h2>
                <ResumeList list={professionalSkills}/>
            </section>
            <section className="resume__languages">
                <h2 className="resume__title">
                    Languages
                </h2>
                <ResumeList list={languages}/>
            </section>
        </div>
    )
}

const ResumeList = ({list}) =>(
    <ul className="resume__list">
        {list.map(item => <li className="resume__item">{item}</li>)}
     </ul>
)


const CardResume = ({time, title, subTitle, description}) => {
return (
    <div className="resume__card">
        <div className="resume__card--info">
            <h3 className="card__time">{time}</h3>
            <h4 className="card__title">{title}</h4>
            <h5 className="card__subtitle">{subTitle}</h5>
        </div>
        <div className="resume__card--description">
            <p className="card__description">{description}</p>
        </div>
    </div>
    )
}

export default Resume
