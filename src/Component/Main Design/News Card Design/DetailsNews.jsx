import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../../Home Page/Header component/Header';
import RigthSide from '../Rigth Side/RigthSide';

const DetailsNews = () => {
    const data = useLoaderData()
    const newData = data.data[0];
    console.log(newData);
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-12 gap-24 w-11/12 mx-auto'>
                <div className='col-span-9'>
                    <h1>Dragon News</h1>

                    <div className="card card-compact bg-base-100  shadow-xl">
                         <img className='w-full h-[400px] object-cover' src={newData.thumbnail_url} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>

                            </div>
                            <Link to="/" className='bg-red-700 py-2 px-6 text-white '>All Categories</Link>
                        </div>
                    </div>
                </div>

                <div className='grid col-span-3'>
                    <RigthSide></RigthSide>
                </div>
            </div>
        </div>
    );
};

export default DetailsNews;