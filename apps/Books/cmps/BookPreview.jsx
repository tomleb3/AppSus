import { utilService } from '../../../services/utilService.js'
const { Link } = ReactRouterDOM;

export function BookPreview({ book, onSaveBooks, onRemove }) {
    // let imgLinks = book.volumeInfo.imageLinks
    let price = utilService.makePrice()

    return <article className="book-preview flex col j-around">
        <h1>{book.title}</h1>
        <small>by {book.authors}</small>
        <Link to={`/details/${book.id}`}>
            <img src={book.thumbnail ? book.thumbnail :
                "https://uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg"}></img>
        </Link>
        <h2><span className={price.price < 150 ? "green" : "red"}>{price.price}</span>{price.currency}</h2>
        <button onClick={(ev) => {
            ev.preventDefault()
            onRemove(book.id)
        }}>Remove</button>
    </article>
}