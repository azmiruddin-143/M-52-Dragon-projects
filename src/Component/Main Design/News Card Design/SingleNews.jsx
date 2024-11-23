import React from 'react';
import { FaRegEye, FaShareAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const SingleNews = ({news}) => {
    const { title, author, rating, _id, total_view, details, thumbnail_url } = news;
    return (
        <div className=" mx-auto bg-white rounded-lg shadow-md p-5 my-5">
        {/* Author and Date */}
        <div className="flex items-center mb-4">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h3 className="text-gray-800 font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{new Date(author.published_date).toLocaleDateString()}</p>
          </div>
          <div className="ml-auto text-gray-600">
            <FaShareAlt className="cursor-pointer" />
          </div>
        </div>
  
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-3">{title}</h2>
  
        {/* Thumbnail */}
        <img src={thumbnail_url} alt="" className="rounded-lg mb-3 w-full h-[400px] bg-cover bg-center object-cover" />
  
        {/* Details */}
        <p className="text-sm text-gray-600 leading-6 mb-3">
          {details.slice(0, 150)}...
          <Link to={`/news/${_id}`} className="text-blue-500 font-semibold cursor-pointer"> Read More</Link>
        </p>
  
        {/* Rating and Views */}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-yellow-500">
            <AiFillStar className="mr-1" />
            <span>{rating.number}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaRegEye className="mr-1" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    );
};

export default SingleNews;