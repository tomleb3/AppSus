import { bookService } from './services/bookService.js'
import { googleBookService } from './services/googleBookService.js'
import { BookList } from './cmps/BookList.jsx'
import { BookNav } from './cmps/BookNav.jsx'

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
        bookService.query()
            .then(books => {
                this.setState({ books })
            })
    }

    onSaveBooks = () => {
        bookService.saveBooksToStorage()
        this.setState({})
    }

    onRemoveBook = (bookId) => {
        bookService.remove(bookId)
        this.onSaveBooks()
        this.loadBooks()
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    getBooksForDisplay = () => {
        const { filterBy } = this.state
        return this.state.books.filter(book => {
            return book.title.toLowerCase().includes(filterBy.title.toLowerCase())
        })
    }

    onReset = () => {
        bookService.clearBookStorage()
        location.reload()
    }

    render() {
        return (
            <main className="book-app">
                <label className="btn-sidenav display-none" htmlFor="sidenav-checkbox"></label>
                <input id="sidenav-checkbox" className="display-none" type="checkbox"></input>
                <BookNav onSaveNotes={this.onSaveNotes} setFilter={this.onSetFilter} onReset={this.onReset}></BookNav>
                <section className="book-list grid j-center">
                    <BookList books={this.getBooksForDisplay()} onRemove={this.onRemoveBook} />
                </section>
            </main>
        )
    }
}