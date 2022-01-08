import React, { useState } from 'react'; 
import Dialog from '@mui/material/Dialog';
import "./AddDogModal.css";

function AddDogModal( { addDogModalOpen, setAddDogModalOpen, idCounter, addDog }) {

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
        <Dialog open={addDogModalOpen} >
            <div className='addDogModalContainer'> 
                <div className='close-button'> 
                     <button onClick={() => { setAddDogModalOpen(false) }}>X</button>
                </div> 

                <div className='addDogTitle'> 
                    <h1 className='modal-title'>Add Dog</h1>
                </div>
                <div className='addDogbody'> 
                
                    <div className='input-fields'> 
                        {/* Owner Name */}
                        <div className='dog-input'>
                            <label htmlFor="dog-owner-name">Owner Name:</label>
                            <input className="inputs-for-modal" type="text" id="dog-owner-name" name="dog-owner-name" placeholder="What is your name?" value={ownerName} onChange={(e)=> { 
                                setOwnerName(e.target.value); 
                            }}></input>
                        </div> 
                        
                        
                        {/* Phone Number */}
                        <div className='dog-input'> 
                            <label htmlFor="dog-owner-tel-num">Phone Number: </label>
                            <input className="inputs-for-modal" type="tel" id="dog-owner-tel-num" name="dog-owner-tel-num" placeholder='What is your phone number?' value={phoneNum} onChange={(e)=>{
                                setPhoneNum(e.target.value);
                            }}></input>
                        </div> 

                        {/* Dog Name */}
                        <div className='dog-input'> 
                            <label htmlFor="dog-name">Dog Name: </label>
                            <input className="inputs-for-modal" type="text" id="dog-name" name="dog-name" placeholder="What is the Dog's name" value={dogName} onChange={(e)=>{
                                setDogName(e.target.value); 
                            }}></input>
                        </div> 

                        {/* Price */}
                        <div className='dog-input'> 
                            <label htmlFor="dog-price">Price: </label>
                            <input className="inputs-for-modal" type="number" id="dog-price" name="dog-price" placeholder='How much?' value={price} onChange={(e)=>{
                                setPrice(e.target.value);
                            }}></input>
                        </div> 

                    </div>
                    <div className='input-fields'> 
                        {/* Breed */}

                        <div className='dog-input'> 
                            <label htmlFor="dog-breed">Breed: </label>
                            <select className="inputs-for-modal" name="dog-breed" id="dog-breed" onChange={(e) => { 
                                const selectedBreed = e.target.value;
                                setBreed(selectedBreed); 
                            }}> 
                                <option value="German Shepherd">German Shepherd</option>
                                <option value="Poodle">Poodle</option>
                                <option value="Bulldog">Bulldog</option>
                                <option value="Husky">Husky</option>
                            </select>
                        </div> 

                        {/* Size */}
                        <div className='dog-input'> 
                            <label htmlFor="dog-size">Size: </label>
                            <input className="inputs-for-modal" type="number" id="dog-size" name="dog-size" placeholder='How much does your dog weigh' value={size} onChange={(e) => { 
                                setSize(e.target.value); 
                            }}></input>
                        </div> 
                        
                        {/* Gender */}
                        <div className='dog-input'> 
                            <label htmlFor="dog-gender">Breed: </label>
                            <select className="inputs-for-modal" name="dog-gender" onChange={(e) => { 
                                const selectedGender = e.target.value;
                                setGender(selectedGender); 
                            }}> 
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div> 

                        {/* Color */}
                        <div className='dog-input'> 
                            <label htmlFor="dog-color">Breed: </label>
                            <select className="inputs-for-modal" name="dog-color" onChange={(e) => { 
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
    
                </div>

                <div className='addDogfooter'> 
                    <button onClick={() => { setAddDogModalOpen(false)}}>Close</button>
                    <button onClick={handleAdd}>Add</button>
                </div>
            </div> 
        </Dialog>
    );
};

export default AddDogModal;
