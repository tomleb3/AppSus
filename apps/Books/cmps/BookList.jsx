import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onSelectBook, onRemove }) {
    if (!books.length) return <div className="loader"></div>
    return books.map(book => {
        return <BookPreview key={book.id} book={book} onSelectBook={onSelectBook} onRemove={onRemove} />
    })
}