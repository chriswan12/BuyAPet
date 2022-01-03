import Navbar from "../../Components/Navbar/Navbar";
import './Homepage.css'; 

const Homepage = () => { 

    return (
        <div> 
            <Navbar /> 
            <div className="container"> 
                <div className="dog-picture">
                    <h1 className="welcome-text">Welcome To BuyAPet!</h1>
                    <h1 className="welcome-text-bottom">We hope you enjoy your stay!</h1>
                    <div className="wrapper">
                        <a href="/store"><button className="shopButton">Shop Now</button></a>
                    </div> 
                </div>
            </div>
        </div>
    ); 
}

export default Homepage; 