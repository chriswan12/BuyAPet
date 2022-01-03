import Navbar from "../../Components/Navbar/Navbar";
import "./Contact.css"; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TouchAppIcon from '@mui/icons-material/TouchApp';

const Contact =() => { 
    return (
        <div className="body"> 
            <Navbar /> 
            <h1 className="contact-title">Contact</h1> 
            <div className="contact-info-container"> 
                <div className="contact-card">
                    <h2 className="contact-header">CALL US</h2>
                    <p className="contact-text">1 (234) 567-8910</p>
                    <h2 className="contact-header">LOCATION</h2>
                    <p className="contact-text">123 Address Place, Mississauga Ontario</p>
                    <h2 className="contact-header">Business Hours</h2>
                    <p className="contact-text">Mon-Fri 10am - 10pm</p>
                    <p className="contact-text">Sat-Sun Closed</p>
                </div> 
                <form className="user-feedback">
                    <input className="contact-input" type="text" placeholder="Enter your Name..." />      
                    <input className="contact-input" type="email" placeholder="Enter a valid email address..."/> 
                    <textarea className="contact-input" placeholder="Enter your Message..."></textarea> 
                    <button className="submit-button">Submit</button>
                </form> 
            </div> 

            <div className="contact-footer-container"> 
                <h2 className="footer-title">GET IN TOUCH <TouchAppIcon className="touch-icon"/></h2> 
                <h3 className="footer-subtitle">Hey! Feel free to message and follow us on any social media platform</h3>
                <p className="descriptive-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="descriptive-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="social-media">
                    <li>
                        <FacebookIcon className="social-media-icons"/> 
                    </li>
                    <li>
                        <TwitterIcon className="social-media-icons"/>
                    </li>
                    <li>
                        <InstagramIcon className="social-media-icons"/>
                    </li>
                    <li> 
                        <MailIcon className="social-media-icons"/> 
                    </li>
                    <li> 
                        <PhoneAndroidIcon className="social-media-icons"/> 
                    </li>
                </ul>
            </div>
        </div>
    ) 
}

export default Contact; 