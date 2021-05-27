import React from 'react';
import '../scss/navbar.scss'

const HeaderNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="#" className="navbar__name">Maya Nelson </a>/
          <a href="#" className="navbar__jobtitle"> Project Manager</a>
        </div>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#" className="navbar__link">ABOUT ME</a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">RESUME</a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">PROJECTS</a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default HeaderNavbar
