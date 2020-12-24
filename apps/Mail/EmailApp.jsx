import { EmailList } from "./cmps/EmailList.jsx"
import { mailService } from "./services/mailService.js"


export class EmailApp extends React.Component {
    state = {
        filterBy: {
            name: '',
            isRead: false
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


    render() {
        
        return (
            <article>
                <aside>
                    <button>Inbox</button>
                    <button>Favorites</button>
                    <button>Sent</button>
                    <button></button>
                </aside>
                <EmailList emails={this.state.emails}/>
            </article>
        )
    }
}