// import { bookService } from '../services/bookService.js'
import { apiBookService } from '../services/bookService.js'
import { LongTxt } from '../cmps/book-app/LongTxt.jsx'
import { BookDetailsEmpty } from './BookDetailsEmpty.jsx'
const { Link } = ReactRouterDOM;

export class BookDetails extends React.Component {
    state = {
        book: null,
        length: '',
        currency: '',
        isLongTxtShown: false
    }

    checkLength = () => {
        if (this.state.book) {
            let length;
            if (this.state.book.pageCount > 500) length = 'Long reading'
            else if (this.state.book.pageCount > 200) length = 'Decent reading'
            else length = 'Light reading'
            this.setState({ length })
        }
    }

    checkCurrency = () => {
        let currency;
        switch (this.state.book.listPrice.currencyCode) {
            case 'USD':
                currency = '$'
                break
            case 'EUR':
                currency = '€'
                break
            case 'ILS':
                currency = '₪'
                break
        }
        this.setState({ currency })
    }

    toggleTxt = () => {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    }

    componentDidMount() {
        const { bookId } = this.props.match.params;
        apiBookService.getBookById(bookId).then(book => {
            this.setState({ book })
            // this.checkLength()
            // this.checkCurrency()
        });
    }

    render() {
        let book = this.state.book
        const { isLongTxtShown } = this.state
        let txtButton = isLongTxtShown ? 'Show Less' : 'Show More'

        if (this.state.book) {
            return <article className="book-details">
                <div>
                    <img src={book.thumbnail}></img>
                </div>
                <div>
                    <h1>{book.title}</h1>
                    <h3>{book.subtitle}</h3>
                    <p>Length: {this.state.length}</p>
                    {/* <h4 className={book.listPrice.amount > 150 ? 'red' : 'green'}>
                        {book.listPrice.amount + ' ' + this.state.currency}
                        <img className="on-sale" src={book.listPrice.isOnSale ? 'https://www.pngonly.com/wp-content/uploads/2017/05/Sale-Medium-PNG-Image.png' : ''}></img>
                    </h4> */}
                    <LongTxt text={book.description} isLongTxtShown={isLongTxtShown} />
                    <button onClick={this.toggleTxt}>{txtButton}</button>
                    <Link to={`/books`}>
                        <button>Close</button>
                    </Link>
                </div>
            </article>
        }
        else return <BookDetailsEmpty />
    }
}