import React, { use } from 'react';

const Book = ({bookPromise}) => {
    const data = use(bookPromise);

    console.log(data);
    
    return (
        <div>
            <h3>Book</h3>
        </div>
    );
};

export default Book;