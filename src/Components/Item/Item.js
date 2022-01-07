import './Item.css';

function Item( { content, setLstOfDogs, item, dogs } ) {

    // Add a button so that when clicking on the div it shows a little x icon at the top that can be pressed and it removes that item from the page 
    function removeDog() { 
        setLstOfDogs(dogs.filter(el => el.id !== item.id))
    }

    return (
        <div className="card-item">
            <img src="https://www.dogfoodadvisor.com/wp-content/uploads/2019/10/Puppy-for-DFA-Dog-Food-Recall-Card-500x333.jpg" alt="dog" /> 
            <div className="text"> 
                <h3>{content.name}</h3>
                <p>{content.description}</p>
                <button>Details</button>
                <button onClick={removeDog}>Delete</button>
            </div>
        </div>
    )
}

export default Item
