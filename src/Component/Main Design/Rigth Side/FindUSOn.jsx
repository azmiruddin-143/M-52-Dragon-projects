import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FindUSOn = () => {
    return (
        <div className='my-14'>
            <h1 className='my-6'>Find Us On</h1>
            <div className="join flex  join-vertical ">
                <button className="  join-item flex gap-2 items-center border-2 border-base-500 p-3"><FaFacebookF className='bg-base-300 p-2 rounded-full' size={30} />Facebook</button>
                <button className="join-item flex gap-2 items-center border-2 border-base-500  p-3"><FaTwitter className='bg-base-300 p-2 rounded-full'  size={30} />Twitter</button>
                <button className="join-item flex gap-2 items-center border-2 border-base-500 p-3"><FaInstagram className='bg-base-300 p-2 rounded-full'  size={30} />Instragram</button>
            </div>
        </div>
    );
};

export default FindUSOn;