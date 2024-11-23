import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([])
    // console.log(categories);

    useEffect(() => {

        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(pev => pev.json())
            .then(data => setCategories(data.data.news_category))

    }, [])

    return (
        <div>
            <h1 className='font-semibold text-xl'>All Categories</h1>
            <div className=' my-6'>
                <NavLink ><button className='bg-[#E7E7E7] rounded-sm py-2 text-xl px-8'>National News</button></NavLink>
            </div>

            <div className='flex flex-col gap-4 '>
                {
                    categories.map(category =>
                        <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="btn bg-base-100 ">{category.category_name}</NavLink>

                    )
                }
            </div>
        </div>
    );
};

export default Categories;