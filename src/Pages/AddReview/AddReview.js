import React from 'react';
import { useContext } from 'react';
import useTitle from '../../useTitel/UseTitel';
import { AuthContext } from '../AuthProvidor/AuthProvidor';

const AddReview = ({id,title}) => {
    const {user}=useContext(AuthContext)
    
    const addReviewHandler=(event)=>{
        event.preventDefault()
        const form=event.target;
        const review=form.review.value;
        const star =form.star.value;
        console.log(review,star)

        const reviews={
            servesid :id,
            servesName:title,
            review,
            star,
            photoURl:user?.photoURL,
            name: user?.displayName,
            email: user?.email,
            
    
        }

        fetch('http://localhost:5000/reviews',{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(reviews)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert("Reviews Succfully add")
                form.reset()
            }
        })
        .catch(error=>console.error(error))

    }
    
    return (
        <div className='mt-5'>
            
            <form onSubmit={addReviewHandler}>
            
            <span className="w-1/2">Add Your Review</span>
          
            <input type="text"name='review' placeholder="Enter you Review " className="input input-bordered input-accent w-full my-3" />
            <span className="w-1/2">Enter Star:</span>
            <input  type="text" name='star' placeholder="Enter you " className="input input-bordered input-accent w-full ml-3 max-w-xs" />
            <button type='sumbit'className='btn'  >Add review</button>

            </form>

            
          
            
        </div>
    );
};

export default AddReview;