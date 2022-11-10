import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../AddReview/AddReview';
import { AuthContext } from '../AuthProvidor/AuthProvidor';


const ServicesDetails = () => {
    const {user}=useContext(AuthContext)
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
<div className='mt-3'>
    {
        user?.uid ?<AddReview id={_id}></AddReview>:<p className='text-red-500 text-2xl italic hover:not-italic'>Pleses LogIn to Add review</p>

    }
    
</div>
            
            
        </div>
    );
};

export default ServicesDetails;