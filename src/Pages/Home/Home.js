import React from 'react';
import Baner from './banaer/Baner';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
          
            <Baner></Baner>
            <Section1></Section1>
            <Service></Service>
            <Section2></Section2>
            
        </div>
    );
};

export default Home;