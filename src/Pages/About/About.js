import Navbar from "../../Components/Navbar/Navbar";
import "./About.css"; 
import DogWalking from "../../img/dog-walking.gif";


const About = () => { 
    return ( 
        <div> 
            <Navbar /> 

            <div className="parent-div"> 
                <div className="about-us-header"> 
                    <h1 className="title-text">About Us</h1>  
                    <h1 className="header-text">━ Our Story ━</h1>
                </div>
                <img className="walking-dog" src={DogWalking} alt="walking-dog"></img>
                <div className="about-us-footer"> 
                    <h2 className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>  
                    <h2 className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>  
                </div>
            </div>
        </div>
    )
}


export default About; 