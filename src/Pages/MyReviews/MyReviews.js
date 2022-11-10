import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvidor/AuthProvidor';
import MyReview from '../MyReview/MyReview';

const MyReviews = () => {
    const {user}=useContext(AuthContext)
    const [reviews,setReviews]=useState([])
    console.log(reviews)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{setReviews(data)
        })
    },[user?.email])
    return (
        <div>
            <div className='my-5 text-red-600 text-2xl'> 
            <p>MY Review {reviews.length} </p>

            </div>


            <table className="table w-full my-5">
    
    <thead>
      <tr>
        
        <th>Service Name</th>
        <th>Review</th>
        <th>Star</th>
        <th>Edit Item</th>
        <th>Delelet Item</th>
      </tr>
    </thead>
    <tbody>
    {
                  reviews.map(reviewsItem=><MyReview
                    key={reviewsItem._id}
                    reviewsItem={reviewsItem}
                    
                    ></MyReview>)
            }   
        
    </tbody>
  </table>
            
            
               
            </div>
            
        
    );
};

export default MyReviews;
