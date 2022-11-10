import React from 'react';
import {FaStar } from 'react-icons/fa';

const SpecificServiceReviewItem = ({rev}) => {
    const {name,photoURL,review,star}=rev
    return (
        

<div className='w-1/2 mx-auto my-5 '>

<div className="card w-96 bg-black-500 shadow-xl">
<div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={photoURL} alt="" />
  </div>
</div>
  <div className="card-body">
    <h2 className="card-title">
      Name: {name}
      
    </h2>
    
    <div className="card-actions ">
    <p className=''>Review:{review}</p>
    <div className='flex'>
    <p>Star:{star}</p>
    <FaStar/>
    </div>
    
    </div>
    
    
  </div>
</div>
           
            
        </div>

        
        
    );
};

export default SpecificServiceReviewItem;