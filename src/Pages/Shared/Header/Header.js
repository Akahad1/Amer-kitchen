import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvidor/AuthProvidor';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const logOutHandle=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    return (
        <div className="navbar bg-white btn-outline btn-primary">
            <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" />
  </div>
</div>


  <div className="flex-1">
    <p className="btn btn-ghost normal-case text-xl">Amer Kitchen</p>
    
  </div>
  
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/'>Home</Link></li>
      <li><Link to='/addservice'>Add Service</Link></li>
      <li><Link to='/Blogs'>Blogs</Link></li>
      <li><Link to='/signup'>Sign Up</Link></li>
      {
        user?.uid ?<>
        
         <li><Link to='/myreviews'>MY Review</Link></li>
         <li><button onClick={logOutHandle}>Log Out</button></li> 
        </>
        :
        <>
        <li><Link to='/login'>Log In</Link></li>
        </>
      }
      
      
     
      <li tabIndex={0}>
      
        
      </li>
      
    </ul>
  </div>
</div>
    );
};

export default Header;