import React from 'react';
import './Footer.css';
import MailIcon from '../../assets/Email.jpeg';

const Footer = () => {
    return (
        <div>
            <div className = "Lining"></div>
            <div className = "Footer-Container">
                <div className = "Email">
                    <li><a href="mailto:mjd2266@columbia.edu"><img src= {MailIcon} alt="Mail" className = "Danzi-navbar-image"></img></a></li>
                </div>
                <div className = "Comment">How does the website look on your iphone?</div>
            </div>
        </div>
        
    )
}

export default Footer