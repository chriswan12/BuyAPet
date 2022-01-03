import './Item.css';

function Item() {

    // Add a button so that when clicking on the div it shows a little x icon at the top that can be pressed and it removes that item from the page 

    return (
        <div className="card-item">
            <img src="https://www.dogfoodadvisor.com/wp-content/uploads/2019/10/Puppy-for-DFA-Dog-Food-Recall-Card-500x333.jpg" alt="dog"> 
            </img> 
            <div className="text"> 
                <h3>Card 1</h3>
                <p>Some text</p>
                <button>Details</button>
            </div>
        </div>
    )
}

export default Item
