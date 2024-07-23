import React from 'react'
import "./footer.css";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link to='/' className='logo'><h1>FoodLite</h1></Link>
                    {/* <img src={assets.logo} alt="" /> */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint voluptate mollitia rem, veniam itaque et cupiditate asperiores eius possimus placeat voluptates nihil adipisci amet!
                    </p>
                    <div className="social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 6351299971</li>
                        <li>contact@foodlite.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright @2024  FoodLite.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer