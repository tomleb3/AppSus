const { NavLink } = ReactRouterDOM;

export function AppHeader() {
    return <header className="flex j-between a-center">
        <NavLink exact to="/"><img src="../assets/imgs/logo.png"></img></NavLink>
        <ul className="flex clean-list">
            <li><NavLink to="/book-app">BOOKS</NavLink></li>
            <li><NavLink to="/email-app">EMAIL</NavLink></li>
            <li><NavLink to="/keep-app">KEEP</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
        </ul>

        <label className="btn-menu" htmlFor="menu-checkbox"></label>
        <input id="menu-checkbox" className="display-none" type="checkbox"></input>
        <div className="menu flex display-none j-around">
            <section className="flex j-around a-center col">
                <button>Keep</button>
                <button>Books</button>
            </section>
            <section className="flex j-around a-center col">
                <button>Email</button>
                <button>About</button>
            </section>
        </div>
    </header>
}