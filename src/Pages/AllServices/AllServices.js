import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllServicesItem from './AllservicesItem/AllServicesItem';

const AllServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <div >
            <div>
            <h1 className=' text-orange-500 text-5xl my-8'>My All Services</h1>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6  mx-5'>
            {
                services.map(service=><AllServicesItem 
                    key={service._Id}
                    service={service}
                ></AllServicesItem>)
            }

            </div>
            
            
        </div>
    );
};

export default AllServices;