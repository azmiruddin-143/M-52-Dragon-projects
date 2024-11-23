import React from 'react';
import Categories from './Categories';
import RigthSide from './Rigth Side/RigthSide';
import AllNews from './News Card Design/AllNews';
import { Outlet } from 'react-router-dom';

const MainDesign = () => {
    return (
        <div className='grid grid-cols-12 gap-24 w-11/12 mx-auto'>
            <div className='col-span-3'>
                <Categories></Categories>
            </div>
            <div className='grid col-span-6'>
                {/* <AllNews></AllNews> */}
                <Outlet></Outlet>
            </div>
            <div className='grid col-span-3'>
                <RigthSide></RigthSide>
            </div>
        </div>
    );
};

export default MainDesign;