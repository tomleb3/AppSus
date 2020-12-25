export const bookService = { query, getBooks, getBookById, remove }

let books = []

function query() { return books }

function getBooks(name = 'effective%20javascript') {
    const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${name}&maxResults=40`
    return axios.get(url).then(res => {
        books = res.data.items
        return res.data.items
    })
}

function getBookById(bookId) {
    const book = books.find(book => book.id === bookId);
    return Promise.resolve(book);
}

function remove(bookId) {
    books = books.filter(book => book.id !== bookId);
}