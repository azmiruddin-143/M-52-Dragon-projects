import React, { useContext } from 'react';
import { dragonContext } from '../../Firebase Setup/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    // login components///
    const { accountLogin } = useContext(dragonContext)
    const location = useLocation()
    const navigate = useNavigate()
    const lognForm = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")

        accountLogin(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/") 
            })
            .catch((error) => {
                console.log(error.message);
                console.log(error.code);
            })

    }
    return (
        <div>
            <div className="bg-base-200 min-h-screen">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                    <div className="card bg-base-100 w-2/4 shrink-0 shadow-2xl my-10">
                        <form onSubmit={lognForm} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <h1 className='mt-5 text-center'>Dont’t Have An Account ? <Link className='text-red-700' to="/auth/register">Register</Link></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;