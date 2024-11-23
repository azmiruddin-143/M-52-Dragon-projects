import React, { useContext } from 'react';
import { dragonContext } from '../../Firebase Setup/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
 const {accountRegister,UpdateMyProfile} = useContext(dragonContext)
 const navigate = useNavigate()
  const registerForm = (e) =>{
     e.preventDefault()
     const form = new FormData(e.target)
     const name = form.get("name")
     const photourl = form.get("photourl")
     const email = form.get("email")
     const password = form.get("password")
    //  console.log(name,photourl,email,password);

    // user create///

    accountRegister(email,password)
    .then((result) =>{
        console.log(result.user);
        // update Profile//
        UpdateMyProfile({displayName: name , photoURL : photourl})
        .then(() =>{
            navigate("/")                
        })
        .catch(() =>{
            console.log("error khaico");
        })
    })
    .catch((error) =>{
        console.log(error.message);
        console.log(error.code);
    })
      
  }

    return (
        <div>
            <div className="bg-base-200 min-h-screen">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse ">
                    <div className="card bg-base-100 w-2/4 shrink-0 shadow-2xl my-10">
                        <h1 className='text-3xl text-center pt-10'>Register your account</h1>
                        <hr className='w-[90%] mx-auto my-5' />
                        <form onSubmit={registerForm} className="card-body my-0 pt-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photourl' placeholder="Enter your photourl" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />

                            </div>
                            <div className="form-control ">
                                <label className="label justify-start gap-4 cursor-pointer">
                                    <input type="checkbox" name='trams'  className="checkbox" />
                                    <span className="label-text">Accept Term & Conditions</span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <h1 className='mt-5 text-center'>Dont’t Have An Login ? <Link className='text-red-700' to="/auth/login">Login</Link></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;