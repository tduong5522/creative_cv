import React from "react";

import avatar from "../../images/avatar.jpg";
import facebook from "../../svg/facebook-f-brands.svg";
import instagram from "../../svg/instagram-brands.svg";
import linkedin from "../../svg/linkedin-in-brands.svg";
import skype from "../../svg/skype-brands.svg";

import "../../scss/home.scss";

const HomePage = () => {
  return (
    <div className="home__container">
      <div className="home__info">
        <div className="home__card">
            <div className="card__img">
                <img src={avatar} className="card__avatar" alt="" />
            </div>
            <h1 className="card__title">Maya Nelson</h1>
            <span className="card__line"></span>
            <span className="card__body">PROJECT MANAGER</span>
            <div className="card__footer">
              <img src={facebook} alt="Facebook" />
              <img src={instagram} alt="Instagram" />
              <img src={linkedin} alt="Linked In" />
              <img src={skype} alt="Skype" />
            </div>
        </div>
      </div>
      <div className="home__introduce">
        <h1 className="introduce__header">Hello</h1>
        <h2 className="introduce__title">Here's who I am & what I do</h2>
        <div className="introduce__button">
            <button className="active">RESUME</button>
            <button>PROJECTS</button>
        </div>
        <p className="introduce__content">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        <br />I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
    </div>
  );
};

export default HomePage;
