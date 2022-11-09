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
      <li><Link to='/signup'>Sign Up</Link></li>
      <li><Link to='/login'>Log In</Link></li>
      <li><button onClick={logOutHandle}>Log Out</button></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li>{user?.email}</li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</div>
    );
};

export default Header;