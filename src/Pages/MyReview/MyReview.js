import React from 'react';
import {FaStar } from 'react-icons/fa';

const MyReview = ({reviewsItem}) => {
    const {servesName,
        review,star}=reviewsItem
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
            <input  className="btn" value="Delete" />
          </label></td>
        
      </tr>
    );
};

export default MyReview;