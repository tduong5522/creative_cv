import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import NavMenu from "./NavMenu";

import '../../scss/navbar.scss'

const KEY = {
  ABOUT_ME : 'ABOUT ME',
  RESUME : 'RESUME',
  PROJECTS : 'PROJECTS',
  CONTACT : 'CONTACT',
}

const navMenu = [
  KEY.ABOUT_ME,
  KEY.RESUME,
  KEY.PROJECTS,
  KEY.CONTACT
]

const HeaderNavbar = () => {
  const [itemActice, setItemActice] = useState(KEY.ABOUT_ME);
  const [isMobile, setIsMobile] = useState(false);
  const onHandleClick = e => {
    setItemActice(e.target.innerHTML);
    setIsMobile(false);
  }

  const setMobileMode = () => {
    setIsMobile(!isMobile);
  }
  
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/" className="navbar__name">Maya Nelson </Link>
          <Link to="/" className="navbar__jobtitle"> Project Manager</Link>
        </div>
        <div className={`navbar__toggle ${isMobile?'active':''}`} id="mobile-menu" onClick={setMobileMode}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <NavMenu items={navMenu} 
          onClick={onHandleClick} 
          active={itemActice} 
          isMobile={isMobile}
        />
      </div>
    </nav>
    )
}

export default HeaderNavbar
