const getStoredBook = () => {

    const storedBook = localStorage.getItem('readList');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
    
}

const addToStoredDB = (id) => {

    const storedBook = getStoredBook();
    
    if (storedBook.includes(id)) {
        alert('Already added');
    }
    else {
        storedBook.push(id);
        localStorage.setItem('readList', JSON.stringify(storedBook));
        console.log(storedBook);
    }
}

export {addToStoredDB};