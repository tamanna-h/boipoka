import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    const data = useLoaderData();
    console.log(data);
    
    useEffect(() => {
        const storedBook = getStoredBook();
        const convertedStoredBook = storedBook.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    }, [])

    const handleSort = (type) => {
        setSort(type);
        if(type === 'pages'){
            const sortedByPage = [...readList].sort((a,b)=> a.pages - b.pages);
            setReadList(sortedByPage);
            console.log(sortedByPage);
            
        }
        if(type === 'ratings'){
            const sortedByRating = [...readList].sort((a,b)=> a.ratings - b.ratings);
            setReadList(sortedByRating);
        }
    }

    return (
        <div className='max-w-6xl mx-auto py-5'>
            <details className="dropdown">
                <summary className="btn m-1">sort by : {sort? sort : 'default'}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort('pages')}>pages</a></li>
                    <li><a onClick={()=>handleSort('ratings')}>ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}/>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;