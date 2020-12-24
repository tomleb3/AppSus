// import { mailService } from "../services/mailService.js"

const { Link } = ReactRouterDOM;

export class EmailPreview extends React.Component {



    onStarToggle = (ev) => {
        ev.preventDefault()
        this.props.email.isStar = !this.props.email.isStar
        this.props.onSaveEmails()
        this.setState({})
    }

    render() {
        const { email } = this.props;

        return <Link to={`/email/${email.id}`}>
            <article className="email-preview flex j-between a-center">
                <div>
                    <h3>{email.sender}</h3>
                    <h2>{email.subject}</h2>
                    <h1>{email.body}</h1>
                </div>
                <div className="btn-container flex display-none">
                    <button onClick={this.onStarToggle}></button>
                    <button onClick={(ev) => {
                        ev.preventDefault()
                        this.props.onRemove(email.id)
                    }}></button>
                    {/* <button>Star</button> */}
                </div>
            </article>
        </Link>
    }

}