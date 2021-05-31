import React from 'react';
import '../../scss/footer.scss';
import facebook from "../../svg/facebook-f-brands.svg";
import instagram from "../../svg/instagram-brands.svg";
import linkedin from "../../svg/linkedin-in-brands.svg";
import skype from "../../svg/skype-brands.svg";

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__left">© 2023 by Maya Nelson.</p>
            <div className="footer__right">
                <div className="footer__call">
                    <p className="footer__info--header">Call</p>
                    <p>0123 456 789</p>
                </div>
                <div className="footer__email">
                    <p className="footer__info--header">Email</p>
                    <p>infos@gmail.com</p>
                </div>
                <div className="footer__follow">
                    <p className="footer__info--header">Follow</p>
                    <div className="footer__social">
                        <img src={facebook} alt="Facebook" />
                        <img src={instagram} alt="Instagram" />
                        <img src={linkedin} alt="Linked In" />
                        <img src={skype} alt="Skype" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
