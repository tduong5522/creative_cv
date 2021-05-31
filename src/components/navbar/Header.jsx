import React, {useState} from 'react';
import '../../scss/navbar.scss'
import NavMenu from "./NavMenu"

const KEY = {
  ABOUT_ME : 'ABOUT ME',
  RESUME : 'RESUME',
  PROJECT : 'PROJECT',
  CONTACT : 'CONTACT',
}

const navMenu = [
  KEY.ABOUT_ME,
  KEY.RESUME,
  KEY.PROJECT,
  KEY.CONTACT
]

const HeaderNavbar = () => {
  const [itemActice, setItemActice] = useState(KEY.ABOUT_ME);
  const [isMobile, setIsMobile] = useState(false);
  const onHandleClick = e => {
    setItemActice(e.target.innerHTML)
  }

  const setMobileMode = () => {
    setIsMobile(!isMobile);
  }
  
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="#" className="navbar__name">Maya Nelson </a>
          <a href="#" className="navbar__jobtitle"> Project Manager</a>
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
