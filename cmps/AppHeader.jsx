const { NavLink } = ReactRouterDOM;

export function AppHeader() {
    return <header>
        <h1><NavLink exact to="/">AppSus</NavLink></h1>
        <ul>
            <li><NavLink to="/book-app">Books</NavLink></li>
            <li><NavLink to="/mail-app">Mail</NavLink></li>
            <li><NavLink to="/keep-app">Keep</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </header >
}