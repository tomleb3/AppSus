import { EmailCompose } from "./cmps/EmailCompose.jsx";
import { EmailList } from "./cmps/EmailList.jsx"
import { mailService } from "./services/mailService.js"

const { Link } = ReactRouterDOM;

export class EmailApp extends React.Component {
    state = {
        filterBy: {
            name: '',
            isRead: false,
            isStar: false
        },
        emails: []
    }

    componentDidMount() {
        console.log('Page is ready');
        this.loadEmails()
    }


    loadEmails = () => {
        //before//
        // const books = bookService.query()
        // this.setState({ books })
        //to async
        mailService.query()
            .then(emails => this.setState({ emails }))
    };

    getEmailsToDisplay = () => {
        const { filterBy, emails } = this.state
        console.log('emails', emails);

        // return emails.filter(email => {
        //     const isTitleInc = email.title.toLowerCase().includes(filterBy.name.toLowerCase())
        //     const isPriceInc = email.listPrice.amount < filterBy.highPrice && book.listPrice.amount > filterBy.lowPrice
        //     return isTitleInc && isPriceInc
        // })
        return emails;
    }

    onSetFilter = (filterBy) => {
        console.log('filterBy:', filterBy);
        this.setState({ filterBy });
    }

    onSaveEmails = () => {
        mailService.saveEmailsToStorage()
    }

    onSendEmail = () => {
        console.log('a')
        keepService.addEmail().then(() => {
            this.loadEmails()
        })
    }

    onRemoveEmail = (emailId) => {
        mailService.removeEmail(emailId).then(() => {
            this.loadEmails()
        })
    }

    render() {

        return (
            <article className="email-app">
                {/* <button onClick={mailService.createEmail}>Compose</button> */}
                <Link className="btn-compose" to="email-app/compose" onSend={this.onSendEmail}>Compose</Link>
                
                <aside>
                    <button className="btn-nav">Inbox</button>
                    <button className="btn-nav">Favorites</button>
                    <button className="btn-nav">Sent</button>
                    <button className="btn-nav">Something</button>
                </aside>
                <EmailList emails={this.state.emails} onRemove={this.onRemoveEmail} onSave={this.onSaveEmails} />
            </article>
        )
    }
}