//General
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
// Mail
import { EmailApp } from "./apps/Mail/EmailApp.jsx"
import { EmailCompose } from "./apps/Mail/cmps/EmailCompose.jsx"
// Keep
import { KeepApp } from "./apps/Keep/KeepApp.jsx"
//Books
import { BookApp } from "./apps/Books/BookApp.jsx"
import { BookDetails } from "./apps/Books/cmps/BookDetails.jsx"
import { BookDetailsEmpty } from "./apps/Books/cmps/BookDetailsEmpty.jsx"

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class AppSus extends React.Component {
    render() {
        return <Router>
            <section className="app-sus">
                <AppHeader />
                <Switch>
                    <Route path="/details/:bookId" component={BookDetails} />
                    <Route path="/details" component={BookDetailsEmpty} />
                    <Route path="/books" component={BookApp} />
                    <Route path="/email-app/compose" component={EmailCompose} />
                    <Route path="/email-app" component={EmailApp} />
                    <Route path="/keep-app" component={KeepApp} />
                    <Route path="/book-app" component={BookApp} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                </Switch>
            </section>
        </Router>
    }
}