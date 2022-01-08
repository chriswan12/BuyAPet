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
                        <p className='detail-content'><b>Description:</b> {itemClicked.description}</p> 
                        <p className='detail-content'><b>Color:</b> {itemClicked.color}</p> 
                        <p className='detail-content'><b>Breed:</b> {itemClicked.breed}</p> 
                        <p className='detail-content'><b>Gender:</b> {itemClicked.gender}</p> 
                    </div>
                    <div className='section-2'> 
                        <p className='detail-content'><b>OwnerName:</b> {itemClicked.ownerName}</p> 
                        <p className='detail-content'><b>Phone: </b>{itemClicked.phone}</p> 
                        <p className='detail-content'><b>Price:</b> {itemClicked.price}</p> 
                        <p className='detail-content'><b>Size: </b>{itemClicked.size}</p> 
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
