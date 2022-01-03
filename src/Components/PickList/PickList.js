import "./PickList.css"; 
import PickListValues from "../PickListValues/PickListValues";

const Picklist = () => { 
        const breeds = { 
            name: "breed", 
            values: ["None", "Poodle", "Bulldog", "German Shepherd", "Husky"]
        }

        const sizes = { 
            name: "size", 
            values: ["None", "Small (0-25 lbs)", "Medium (26-60 lbs)", "Large (60+ lbs)"]
        } 

        const gender = { 
            name: "gender", 
            values: ["None", "Male", "Female"]
        }

        const color = { 
            name: "color", 
            values: ["None", "Black", "White", "Golden", "Brown", "Gray"]
        }

        const price = { 
            name: "price", 
            values: [
                "None",
                "200-350", 
                "350-500", 
                "500-1000",
                "1000+"
            ]
        }

    return (
        <div className="filter-container"> 
            <PickListValues items={breeds}/>
            <PickListValues items={sizes} />
            <PickListValues items={gender} />
            <PickListValues items={color} />
            <PickListValues items={price} />
            <button>Apply</button>
        </div> 
    )
}

export default Picklist; 