import { BookFilter } from '../cmps/BookFilter.jsx'

export function BookNav({ setFilter, onReset }) {
    return <nav className="book-nav flex col">
        <div className="book-filter">
            <label>Search</label>
            <BookFilter setFilter={setFilter} />
        </div>
        <button onClick={onReset}>Reset</button>
    </nav>
}