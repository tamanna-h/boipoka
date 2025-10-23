import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center w-full p-16'>
            <div >
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <button className='btn-primary'>test test</button>
            </div>
            <div>
                <img className='w-3/12' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;