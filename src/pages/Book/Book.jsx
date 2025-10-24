import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({book}) => {
    // const data = use(bookPromise);

    // console.log(data);
    
    console.log(book);
    const {bookName, author, image, rating, category} = book
    
    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className="p-10 bg-gray-600 w-2/3 mx-auto">
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
    );
};

export default Book;