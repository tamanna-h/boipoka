import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    // console.log(id);
    const data = useLoaderData();
    // console.log(data);

    const book = data.find(book => book.bookId === bookId);
    // console.log(book);
    const {bookName, image} = book;
    
    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} alt=" " />
            <h5>{bookName}</h5>

            <button className='btn btn-accent m-2'>Read</button>
            <button className='btn btn-info m-2'>Wish List</button>
        </div>
    );
};

export default BookDetails;