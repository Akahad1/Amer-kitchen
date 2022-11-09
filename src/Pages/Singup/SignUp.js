import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvidor/AuthProvidor';

const SignUp = () => {
    const {createUser}=useContext(AuthContext)


    const singupHandle=(event)=>{
        event.preventDefault()
        const form =event.target
        const name =form.name.value;
        const email =form.email.value;
        const photoUrl =form.photourl.value;
        const password =form.password.value;
        console.log(name,email,password,photoUrl)
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>console.error('error',error))
    

    }
    return (
        <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card  w-full  shadow-2xl bg-base-100">
        <form onSubmit={singupHandle}>
        <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="photourl" name='photourl' placeholder="Enter photourl" className="input input-bordered" />
        </div>
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
            <span className="label-text"><p className='text-sm'>You already Sign Up <Link to='/login'>Plesea Log In</Link></p></span>
          </label>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>

        </form>
      
    </div>
  </div>
</div>
    );
};

export default SignUp;