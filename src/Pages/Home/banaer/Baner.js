import React from 'react';
import './baner.css'


const Baner = () => {
    return (
        <div>
            <div className="relative max-w-4xl my-10 mx-auto">
  <div  >
    <div className="image-disain">
    <img src='https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg' className="w-full h-2/3 rounded-md" />

    </div>
    
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/6 top-1/2">
      <h1 className=' font-bold text-6xl  text-white'>Wellcome to <br /> Amer Kitchen</h1>
    </div>
  </div> 
  
</div> 

            
        </div>
    );
};

export default Baner;