import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userImg from '../../../assets/user.png';
import { dragonContext } from '../../../Firebase Setup/AuthContext';
const Navbar = () => {
    const { user, logOut } = useContext(dragonContext)
    return (
        <div className='flex justify-between w-11/12 mx-auto my-4 items-center'>
            <div className=''>

                  {
                    user ? <h1>{user?.email}</h1> :
                    <h1>**************</h1>
                  }
                

            </div>

            <div className='flex gap-4'>
                <Link to="/">Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>

            <div className='flex gap-2 items-center  '>
                <div>
                    {
                        user? <img className='w-[50px] h-[50px] rounded-full' src={user.photoURL} alt="" /> : <img src={userImg} alt="" />
                    }
                    
                     
                </div>
                {
                    user ? <button onClick={logOut} className='bg-[#403F3F] py-2 px-5 text-white'>Logout</button> :
                        <NavLink to="/auth/login"><button className='bg-[#403F3F] py-2 px-5 text-white'>Login</button></NavLink>
                }


            </div>
        </div>
    );
};

export default Navbar;