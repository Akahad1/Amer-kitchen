import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../useTitel/UseTitel';
import { AuthContext } from '../AuthProvidor/AuthProvidor';

const Login = () => {
    const {logIn,googleLogin}=useContext(AuthContext)
    useTitle('Log In')

    const loction =useLocation()
    const navigate =useNavigate()
    const from =loction.state?.from?.pathname || '/'
    const logInHandle=(event)=>{
        event.preventDefault()
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        logIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from,{replace:true})
           
            
        })
        .catch(error=>console.log('error',error))
    }
       
     const googleLogInHandler=()=>{
        googleLogin()
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch(error=>console.error("error",error))
     }
    
    return (
        <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card  w-full  shadow-2xl bg-base-100">
        <form onSubmit={logInHandle}>
        <div className="card-body">
        
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <span className="label-text"><p className='text-sm'>You Have No Register <Link className='text-blue' to='/signup'>Plesea Sign Up</Link></p></span>
          </label>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Log In</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={googleLogInHandler} className="btn btn-primary">Google Sign In</button>
        </div>
        
      </div>

        </form>
      
    </div>
  </div>
</div>
    );
};

export default Login;