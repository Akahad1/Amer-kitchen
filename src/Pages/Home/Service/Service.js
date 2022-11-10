import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesItem from '../ServicesItem/ServicesItem';

const Service = () => {
    const [services ,setServices]=useState([])
    useEffect(()=>{
        fetch('https://amer-kitchen-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div>
            <h1 className=' text-orange-500 text-5xl my-8'>My All Services</h1>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6  mx-5'>
        {
                services.map(service=><ServicesItem
                     key={services._Id}
                     service={service}
                ></ServicesItem>)
            }

            

        </div>
        <div>
            <Link to='/services'>
            <button className=" rounded-lg text-3xl p-6 btn-warning my-4">All Servies</button>
            </Link>
            
            </div>
 
        </div>
    );
};

export default Service;