import React from 'react';
import Dialog from '@mui/material/Dialog';
import "./DetailModal.css"; 

function DetailModal( {detailModalOpen, setDetailModalOpen, item, dogs} ) {
    const itemClicked = dogs.filter(el => el.id === item.id)[0]; 
    console.log(itemClicked); 

    return (
        <div>
            <Dialog open={detailModalOpen} > 
                <div className='header-footer-container'> 
                    <h1 className='detailTitle'>{itemClicked.name}</h1>
                </div>
                <div className='detail-container'>
                    <div className='section-1'> 
                        <p className='detail-content'>Description: {itemClicked.description}</p> 
                        <p className='detail-content'>Color: {itemClicked.color}</p> 
                        <p className='detail-content'>Breed: {itemClicked.breed}</p> 
                        <p className='detail-content'>Gender: {itemClicked.gender}</p> 
                    </div>
                    <div className='section-2'> 
                        <p className='detail-content'>OwnerName: {itemClicked.ownerName}</p> 
                        <p className='detail-content'>Phone: {itemClicked.phone}</p> 
                        <p className='detail-content'>Price: {itemClicked.price}</p> 
                        <p className='detail-content'>Size: {itemClicked.size}</p> 
                    </div>
                </div> 
                <div className='header-footer-container'>
                    <button className="detail-close-button" onClick={() => setDetailModalOpen(false)}>Close</button> 
                </div> 
            </Dialog>
        </div>
    )
}

export default DetailModal;
