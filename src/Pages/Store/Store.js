import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Item from "../../Components/Item/Item";
import "./Store.css"; 
import SearchIcon from '@mui/icons-material/Search';
import Picklist from "../../Components/PickList/PickList";
import AddIcon from '@mui/icons-material/Add';
import AddDogModal from "../../Components/AddDogModal/AddDogModal";

function Store() {

    const [searchTerm, setSearchTerm] = useState(""); 
    const [addDogModalOpen, setAddDogModalOpen] = useState(false); 
    const [idCounter, setIdCounter] = useState(1); 
    const [lstOfDogs, setLstOfDogs] = useState([
        { name: "test1",
            description: "lorem ipsum",
            id: 1,
            breed: "Poodle",
            size: "Small (0-25lb)", 
            gender: "Male",
            color: "Black",
            price: "350-500",
            ownerName: "Bob",
            phone: "231414"
        },
        {
            name: "test2",
            description: "lorem ipsum",
            id: 2,
            breed: "Husky",
            size: "Large (60+ lbs)", 
            gender: "Female",
            color: "White",
            price: "350-500",
            ownerName: "Bob",
            phone: "231414"
        },
        {
            name: "test3",
            description: "lorem ipsum",
            id: 3,
            breed: "Husky",
            size: "Large (60+ lbs)", 
            gender: "Female",
            color: "Black",
            price: "350-500",
            ownerName: "Bob",
            phone: "231414"
        }

    ]);

    const [addFilter, setAddFilter] = useState(false); 
    const [filters, setFilters] = useState({
        breed: "", 
        size: "", 
        gender: "", 
        color: "", 
        price: ""
    }); 

    function openAddDogModal() { 
        setAddDogModalOpen(true);
    }

    function addDog(newDog) { 
        setIdCounter(idCounter + 1);
        setLstOfDogs(oldLst => [...oldLst, newDog]);
    }

    function checkFilterCondition(val) { 
        // only get the object that has the filter condition satisfied
        // Added the || !condition to see if the user has selected that filter if so check the equal condition, if not 
        // ignore this filter and apply the ones that exists 
        return ((val.breed === filters.breed || !filters.breed) && (val.size === filters.size || !filters.size) && 
        (val.color === filters.color || !filters.color) &&
        (val.price === filters.price || !filters.price) && (val.gender === filters.gender || !filters.gender));
    }

    function getFilters(filterValues) { 
        setFilters({
            breed: filterValues.breed,
            size: filterValues.size,
            gender: filterValues.gender,
            color: filterValues.color, 
            price: filterValues.price
        }); 
        setAddFilter(true); 

        if (!filterValues.breed && !filterValues.size 
        && !filterValues.gender  && !filterValues.color 
        && !filterValues.price
        ){
            setFilters({
                breed: "",
                size: "",
                gender: "",
                color: "", 
                price: ""
            }); 
            setAddFilter(false) 
        }
    }

    return (
        <div>
            <Navbar /> 
            <div className="family-buying">
            </div>
            <div className="filter-search">
                <div className="search-container">
                    <input className="search" type="text" placeholder="Search..." onChange={(e) => { 
                        setSearchTerm(e.target.value); 
                    }}/> 
                    <button className="search-btn">
                        <SearchIcon style={{fill: "white", margin: "5px" }}/>
                    </button>
                    <button onClick={openAddDogModal} className="add-dog"> 
                        <AddIcon style={{fill: "white", margin: "5px" }} /> 
                    </button>
                </div> 
            </div> 
            <div className="content-container">
                <div className="filter"> 
                    <Picklist getFilters={getFilters}/> 
                </div>
    
                <div className="card-container">
                    {lstOfDogs.filter((val) => {
                        if (searchTerm === "") {
                            return val; 
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val 
                        } 
                    }).filter((val) => {
                        if (addFilter) { 
                            if (checkFilterCondition(val)){
                                    return val
                            }
                        } else if (!addFilter) {
                            return val
                        }
                    }).map((lstItem, index) => (
                        <Item key={index} item={lstItem} setLstOfDogs={setLstOfDogs} content={lstItem} dogs={lstOfDogs} /> 
                    ))}
                </div>
            </div> 

            {addDogModalOpen && <AddDogModal addDogModalOpen={addDogModalOpen} setAddDogModalOpen={setAddDogModalOpen} idCounter={idCounter} setIdCounter={setIdCounter} addDog={addDog}/>}
        </div>
    )
}

export default Store;
