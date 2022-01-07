import React, { useState } from 'react'; 

function AddDogModal( { setAddDogModalOpen, idCounter, addDog }) {

    const [breed, setBreed] = useState('');
    const [gender, setGender] = useState('');
    const [color, setColor] = useState('');
    const [ownerName, setOwnerName] = useState(''); 
    const [phoneNum, setPhoneNum] = useState('');
    const [dogName, setDogName] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);

    function handleAdd() { 
        const newDog = { 
            name: dogName,
            description: "lorem ipsum",
            id: idCounter,
            breed: breed,
            size: size, 
            gender: gender,
            color: color,
            price: price,
            ownerName: ownerName,
            phone: phoneNum
        } 

        setAddDogModalOpen(false); 
        addDog(newDog); 
    }

    return (
        <div className='addDogModalBackground'>
            <div className='addDogModalContainer'> 
                <button>X</button>

                <div className='addDogTitle'> 
                    <h1>Add Dog</h1>
                </div>
                <div className='addDogbody'> 
                
                    <div> 
                        {/* Owner Name */}
                        <label htmlFor="dog-owner-name">Owner Name:</label>
                        <input type="text" id="dog-owner-name" name="dog-owner-name" placeholder="What is your name?" value={ownerName} onChange={(e)=> { 
                            setOwnerName(e.target.value); 
                        }}></input>

                        {/* Phone Number */}
                        <label htmlFor="dog-owner-tel-num">Phone Number: </label>
                        <input type="tel" id="dog-owner-tel-num" name="dog-owner-tel-num" placeholder='What is your phone number?' value={phoneNum} onChange={(e)=>{
                            setPhoneNum(e.target.value);
                        }}></input>

                        {/* Dog Name */}
                        <label htmlFor="dog-name">Dog Name: </label>
                        <input type="text" id="dog-name" name="dog-name" placeholder="What is the Dog's name" value={dogName} onChange={(e)=>{
                            setDogName(e.target.value); 
                        }}></input>

                        {/* Price */}
                        <label htmlFor="dog-price">Price: </label>
                        <input type="number" id="dog-price" name="dog-price" placeholder='How much?' value={price} onChange={(e)=>{
                            setPrice(e.target.value);
                        }}></input>

                    </div>
                    <div> 
                        {/* Breed */}
                        <select onChange={(e) => { 
                            const selectedBreed = e.target.value;
                            setBreed(selectedBreed); 
                        }}> 
                            <option value="German Shepherd">German Shepherd</option>
                            <option value="Poodle">Poodle</option>
                            <option value="Bulldog">Bulldog</option>
                            <option value="Husky">Husky</option>
                        </select>

                        {/* Size */}
                        <label htmlFor="dog-size">Size: </label>
                        <input type="number" id="dog-size" name="dog-size" placeholder='How much does your dog weigh' value={size} onChange={(e) => { 
                            setSize(e.target.value); 
                        }}></input>
                        
                        {/* Gender */}
                        <select onChange={(e) => { 
                            const selectedGender = e.target.value;
                            setGender(selectedGender); 
                        }}> 
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                        {/* Color */}
                        <select onChange={(e) => { 
                            const selectedColor = e.target.value;
                            setColor(selectedColor); 
                        }}> 
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                            <option value="Golden">Golden</option>
                            <option value="Brown">Brown</option>
                            <option value="Gray">Gray</option>
                        </select>
                    </div> 
    
                </div>

                <div className='addDogfooter'> 
                    <button onClick={() => { setAddDogModalOpen(false)}}>Close</button>
                    <button onClick={handleAdd}>Add</button>
                </div>
            </div> 
        </div>
    );
};

export default AddDogModal;
