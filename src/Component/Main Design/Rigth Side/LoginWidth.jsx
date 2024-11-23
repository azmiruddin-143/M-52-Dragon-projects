import React from 'react';
import { RiGoogleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const LoginWidth = () => {
    return (
        <div className='flex flex-col '>
            <button className='flex gap-4 my-2 items-center border border-[#007bff] py-2 px-10 rounded-md'><RiGoogleFill className='text-[#007bff] ' />Login with Google</button>
            <button className='flex gap-4 items-center border border-[#000000] py-2 px-10 rounded-md'><FaGithub className='text-[#000000] ' />Login with Github</button>
        </div>
       

    );
};

export default LoginWidth;