import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../AddReview/AddReview';


const ServicesDetails = () => {
    const servicesItem =useLoaderData()
    const {img,title,price,description,_id} =servicesItem;
    return (
        <div className='my-8 '>
            <div className="card place-content-center w-1/2 mx-auto bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    <p>{description}</p>
    
  </div>
  


</div>
<div>
    <AddReview id={_id}></AddReview>
</div>
            
            
        </div>
    );
};

export default ServicesDetails;