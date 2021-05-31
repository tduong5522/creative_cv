import React from 'react'

const NavMenu = ({items, onClick, active,isMobile}) => {
    return (
        <ul className={`navbar__menu ${isMobile?'active':''}`}>
            {items.map((item) => 
                <li className="navbar__item">
                    <a href="#" className={active===item? "navbar__link active": "navbar__link"} onClick={onClick}>{item}</a>
                </li>
            )}
        </ul>
    )
}

export default NavMenu
