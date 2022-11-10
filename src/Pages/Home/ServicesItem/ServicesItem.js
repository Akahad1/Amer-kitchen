import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import AddReview from '../../AddReview/AddReview';

const ServicesItem = ({service}) => {
    const {title,img,price,description,_id}=service
    return (
        <div>
            <div className="card  w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
      <PhotoView src="/1.jpg">
      <img src={img} alt="Shoes" />
      </PhotoView>
    </PhotoProvider>
  
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">Price: ${price}</h2>
    <p>{description.slice(0,100)}...</p>
    <div className="card-actions justify-end">
      <Link to={`/services/${_id}`}>
      <button className="btn btn-primary">All Details</button>
      </Link>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ServicesItem;