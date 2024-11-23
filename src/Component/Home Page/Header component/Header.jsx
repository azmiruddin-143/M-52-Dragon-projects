import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col my-6 space-y-4'>
             <img src={logo} alt="Logo"  />
             <h1>Journalism Without Fear or Favour</h1>
             <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;