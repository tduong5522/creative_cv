import React from 'react'
import {Link} from 'react-router-dom';
import {convertStringToUrl} from "../../share/formatString";
const NavMenu = ({items, onClick, active,isMobile}) => {
    console.log(convertStringToUrl(active));
    return (
        <ul className={`navbar__menu ${isMobile?'active':''}`}>
            {items.map((item) => 
                <li className="navbar__item">
                    <Link to={convertStringToUrl(item)} className={active===item? "navbar__link active": "navbar__link"} onClick={onClick}>{item}</Link>
                </li>
            )}
        </ul>
    )
}

export default NavMenu
