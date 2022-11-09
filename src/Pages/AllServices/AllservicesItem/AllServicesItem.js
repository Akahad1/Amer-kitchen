import React from 'react';

const AllServicesItem = ({service}) => {
    const {img,price,description,title}=service
    return (
        <div>
            <div className="card  w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    <p>{description.slice(0,100)}...</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">All Details</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default AllServicesItem;