export const bookService = { query }

function query(name = 'effective%20javascript') {
    const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${name}&maxResults=40`
    return axios.get(url).then(res => {
        return res.data.items
    })
}