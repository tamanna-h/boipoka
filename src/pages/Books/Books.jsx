import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, [])

    // const bookPromise = fetch('booksData.json').then(res => res.json())

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>All Books</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        data.map(book => <Book key={book.bookId} book={book}/>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;