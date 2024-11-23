import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from './SingleNews';

const AllNews = () => {

    const { data } = useLoaderData()
    return (
        <div>
            <h1>Dreagon News Home {data.length}</h1>
            {
                data.map(data => <SingleNews key={data._id} news = {data}></SingleNews> )
            }
        </div>
    );
};

export default AllNews;