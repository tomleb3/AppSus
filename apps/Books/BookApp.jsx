import { bookService } from './services/bookService.js'
import { storageService } from './services/storageService.js'
import { BookList } from './cmps/BookList.jsx'
import { BookFilter } from './cmps/BookFilter.jsx'

export class BookApp extends React.Component {
    state = {
        books: [],
        selectedBook: null,
        filterBy: {
            title: ''
        }
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.getBooks()
            .then(books => {
                console.log(books)
                this.setState({ books })
            })
    }

    onRemoveBook = (bookId) => {
        bookService.remove(bookId)
        this.loadBooks()
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    getBooksForDisplay = () => {
        const { filterBy } = this.state
        return this.state.books.filter(book => {
            return book.volumeInfo.title.toLowerCase().includes(filterBy.title.toLowerCase())
        })
    }

    render() {
        return (
            <main>
                <div className="top-container flex j-between">
                    <div>
                        <BookFilter setFilter={this.onSetFilter} />
                    </div>
                    <button onClick={storageService.clear()}>Remove All</button>
                </div>
                <section className="book-list grid j-center">
                    <BookList books={this.getBooksForDisplay()} onRemove={this.onRemoveBook} />
                </section>
            </main>
        )
    }
}