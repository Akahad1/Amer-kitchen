import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SpecificServiceReviewItem from '../SpecificServiceReviewItem/SpecificServiceReviewItem';


const SpecificServiceReview = ({id}) => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch(`https://amer-kitchen-server.vercel.app/reviews/${id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    
    return (
        <div>
            {
                reviews.map(rev=><SpecificServiceReviewItem
                rev={rev}
                ></SpecificServiceReviewItem>)

            }
        </div>
        
    );
};

export default SpecificServiceReview;