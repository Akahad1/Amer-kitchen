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
        fetch(`https://amer-kitchen-server.vercel.app/reviews?email=${user?.email}`,{
          headers:{
            authroization:  `Bearer ${localStorage.getItem('AmerToken')}`
          }
        })
        .then(res=>res.json())
        .then(data=>{setReviews(data)
        })
    },[user?.email])


    // nerdisto item delete kora
    const deletItem =(id)=>{
      const prossed =window.confirm("Are you sure, cancel this oder")
      if(prossed){
        fetch(`https://amer-kitchen-server.vercel.app/reviews/${id}`,{
        method: "DELETE",
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount){
          alert('delete sucssfuly')
          const remainig =reviews.filter(odr=> odr._id !== id)
          setReviews(remainig)
        }
      })

      
    }

    }
    return (
        <div>
            <div className='my-5 text-red-600 text-2xl'> 
            <p>MY Review {reviews.length} </p>

            </div>

            {
                reviews.length>0 ?<table className="table w-full my-5">
    
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
                                deletItem={deletItem}
                                
                                ></MyReview>)
                        }   
                    
                </tbody>
              </table>
              : <div className='my-5 text-red-600 text-2xl'> 
              <p>MY Have No Review </p>
  
              </div>
            }


            
            
            
               
            </div>
            
        
    );
};

export default MyReviews;
