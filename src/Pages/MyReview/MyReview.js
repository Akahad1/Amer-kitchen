import React from 'react';
import {FaStar } from 'react-icons/fa';

const MyReview = ({reviewsItem,deletItem}) => {
    const {servesName,
        review,star,_id}=reviewsItem
    return (
        <tr>
        
        <td>
            <p> {servesName}</p>
        </td>
        <td> {review} </td>
        <td>
        <p className='flex'>{star}<FaStar/></p>
        </td>
        <td><button className='btn'>Edit</button></td>
        <td><label>
            <input onClick={()=>deletItem(_id)} className="btn" value="Delete" />
          </label></td>
        
      </tr>
    );
};

export default MyReview;