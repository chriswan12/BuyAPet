import Navbar from "../../Components/Navbar/Navbar";
import Item from "../../Components/Item/Item";
import "./Store.css"; 
import SearchIcon from '@mui/icons-material/Search';
import Picklist from "../../Components/PickList/PickList";
import Footer from "../../Components/Footer/Footer";

function Store() {

    return (
        <div>
            <Navbar /> 
            <div className="family-buying">
            </div>
            <div className="filter-search">
                <div className="search-container">
                    <input className="search" type="text" placeholder="Search..." /> 
                    <button className="search-btn">
                        <SearchIcon style={{fill: "white", margin: "5px" }}/>
                    </button>
                      {/* Add button where the user can add an item */}
                </div> 
            </div> 
            <div className="content-container">
                <div className="filter"> 
                    <Picklist /> 
                </div>
                <div className="card-container">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div> 
            <Footer /> 
        </div>
    )
}

export default Store;
