const { NavLink } = ReactRouterDOM;

export function AppHeader() {
    return <header className="flex j-between">
        <h1><NavLink exact to="/">AppSus</NavLink></h1>
        <ul className="flex clean-list">
            <li><NavLink to="/book-app">BOOKS</NavLink></li>
            <li><NavLink to="/email-app">EMAIL</NavLink></li>
            <li><NavLink to="/keep-app">KEEP</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
        </ul>
    </header >
}