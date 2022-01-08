import { useState } from "react";
import "./PickList.css"; 
import PickListValues from "../PickListValues/PickListValues";

const Picklist = ({ getFilters }) => { 
    const breeds = { 
        name: "breed", 
        values: ["", "Poodle", "Bulldog", "German Shepherd", "Husky"]
    }

    const sizes = { 
        name: "size", 
        values: ["", "Small (0-25 lbs)", "Medium (26-60 lbs)", "Large (60+ lbs)"]
    } 

    const gender = { 
        name: "gender", 
        values: ["", "Male", "Female"]
    }

    const color = { 
        name: "color", 
        values: ["", "Black", "White", "Golden", "Brown", "Gray"]
    }

    const price = { 
        name: "price", 
        values: [
            "",
            "200-350", 
            "350-500", 
            "500-1000",
            "1000+"
        ]
    }

    const [breedValue, setBreedValue] = useState(''); 
    const [sizeValue, setSizeValue] = useState(''); 
    const [genderValue, setGenderValue] = useState(''); 
    const [colorValue, setColorValue] = useState(''); 
    const [priceValue, setPriceValue] = useState(''); 

    function getFilterValues() { 
        
        const filterValues = { 
            breed: breedValue,
            size: determineSize(sizeValue[0]), 
            gender: genderValue, 
            color: colorValue, 
            price: determinePrice(priceValue)
        } 
        
        getFilters(filterValues); 
    }

    function determineSize(size) { 
        if(!size) {
            return [0, Infinity]; 
        }
        else if(size.toLowerCase() === "s"){
            return [0, 25]
        }
        else if (size.toLowerCase() === "m"){
            return [26, 60];
        }
        else if (size.toLowerCase() === "l"){
            return [60, Infinity];
        }
        else {
            return [0, Infinity]; 
        }
    }

    function determinePrice(price) { 
        if(price.length <= 0){
            return [0, Infinity]; 
        }
        else if (price.search("-") === -1){
            return [1000, Infinity]; 
        }
        const priceValues = price.split("-"); 
        return [parseInt(priceValues[0]), parseInt(priceValues[1])]; 
    }


    return (
        <div className="filter-container"> 
            <PickListValues items={breeds} setValueSelected={setBreedValue} />
            <PickListValues items={sizes} setValueSelected={setSizeValue}/>
            <PickListValues items={gender} setValueSelected={setGenderValue}/>
            <PickListValues items={color} setValueSelected={setColorValue}/>
            <PickListValues items={price} setValueSelected={setPriceValue}/>
            <button onClick={getFilterValues}>Apply</button>
        </div> 
    )
}

export default Picklist; 