import { EmailList } from "./cmps/EmailList.jsx"
import { mailService } from "./services/mailService.js"


export class EmailApp extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    render() {
        console.log(mailService.query());
        return (
            <article>
                <EmailList emails={mailService.query()}/>
            </article>
        )
    }
}