import './Navbar.css'; 
import React, {useState} from 'react';
import PetsIcon from '@material-ui/icons/Pets';
import ReorderIcon from '@material-ui/icons/Reorder';


const Navbar = () => { 

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar"> 
            <div className='leftSide'>
               <a href="/"><PetsIcon style={{fill: "white", fontSize: 40, margin: "5px" }} /> </a>
               <h1 className="brand-name"><a href="/">BuyAPet </a></h1>
            </div>
            <div className='rightSide'> 
                <div className='links' id={showLinks ? "hidden" : ""}>  
                    <a href="/">Home</a>
                    <a href='/store'>Store</a>
                    <a href='/about-us'>About Us</a>
                    <a href='/contact'>Contact</a>
                    <a href='/sign-up'>Sign Up</a>
                    <a href='/login'>Login</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)} className='displayButton'><ReorderIcon style={{marign: "5px", fill: "black"}}/></button>
            </div>
        </div>
    ); 
}

export default Navbar; 