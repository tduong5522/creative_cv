import React from 'react';
import '../scss/footer.scss'

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
                    <p>infos@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
