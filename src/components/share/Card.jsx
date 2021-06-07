import React from 'react'

const Card = ({time, title, subTitle, description}) => {
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

export default Card
