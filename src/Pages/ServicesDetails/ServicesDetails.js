import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ServicesDetails = () => {
    const servicesItem =useLoaderData()
    const {img,titel,price,description} =servicesItem;
    return (
        <div className='my-8 '>
            <div className="card place-content-center w-1/2 mx-auto bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{titel}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    <p>{description}</p>
    
  </div>

  
</div>
            
            
        </div>
    );
};

export default ServicesDetails;