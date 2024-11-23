import React from 'react';
// import Marquee from "react-fast-marquee";
const LatestSlider = () => {
    return (
        <div className='flex gap-4 items-center bg-base-200 w-11/12 py-3 px-3 mx-auto'>
            <button className='bg-[#D72050] text-white py-2 px-5'>Latest</button>


            {/* <Marquee pauseOnHover> */}
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quis quisquam porro iste sit quae. Facilis doloremque animi consequatur iusto tempora recusandae ad molestias. Hic eum reprehenderit odio assumenda autem?
                </p>
            {/* </Marquee> */}
        </div>
    );
};

export default LatestSlider;