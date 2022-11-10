import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Pages/AuthProvidor/AuthProvidor';

const PrivetRouter = ({children}) => {
    const {user,looder}=useContext(AuthContext)
    const loction =useLocation()
    if(looder){
        return <h1><div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></h1>
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate to='/login' state={{from :loction}} replace>

        </Navigate>
    );
};

export default PrivetRouter;