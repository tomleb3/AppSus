import { AppHeader } from "./cmps/AppHeader.jsx"
import { BookApp } from "./apps/Books/BookApp.jsx"
import { MailApp } from "./apps/Mail/MailApp.jsx"
import { KeepApp } from "./apps/Keep/KeepApp.jsx"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class AppSus extends React.Component {
    render() {
        return <Router>
            <section className="app-sus">
                <AppHeader />
                <Switch>
                    <Route path="/keep-app" component={KeepApp} />
                    <Route path="/mail-app" component={MailApp} />
                    <Route path="/book-app" component={BookApp} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                </Switch>
            </section>
        </Router>
    }
}