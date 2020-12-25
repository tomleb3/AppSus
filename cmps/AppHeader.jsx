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
                <NavLink to="/keep-app"><button className="btn-keep"></button></NavLink>
                <NavLink to="/email-app"><button className="btn-email"></button></NavLink>
            </section>
            <section className="flex j-around a-center col">
                <NavLink to="/book-app"><button className="btn-book"></button></NavLink>
                <NavLink to="/about"><button className="btn-about"></button></NavLink>
            </section>
        </div>
    </header>
}