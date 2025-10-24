import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({book}) => {
    // const data = use(bookPromise);

    // console.log(data);
    
    console.log(book);
    const {bookName, author, image, rating, category, tags, yearOfPublishing, publisher} = book
    
    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className="p-10 bg-gray-600 w-2/3 mx-auto">
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-10'>
      {
        tags.map(tag => <span className="badge badge-outline">{tag}</span>)
      }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book by: {publisher}</p>
    <div className='border-t-1 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
    );
};

export default Book;