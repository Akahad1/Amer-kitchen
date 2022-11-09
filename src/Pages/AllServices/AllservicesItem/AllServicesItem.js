import React from 'react';
import { Link } from 'react-router-dom';

const AllServicesItem = ({service}) => {
    const {img,price,description,title,_id}=service
    return (
        <div>
            <div className="card  w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    <p>{description.slice(0,100)}...</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}><button className="btn btn-primary">All Details</button></Link>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default AllServicesItem;