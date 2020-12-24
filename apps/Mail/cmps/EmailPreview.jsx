// import { mailService } from "../services/mailService.js"

const { Link } = ReactRouterDOM;

export class EmailPreview extends React.Component{
    
    

    onStarToggle = (ev) => {
        ev.preventDefault()
        this.props.email.isStar = !this.props.email.isStar
        this.props.saveEmails()
        this.setState({})
    }

    render(){
        const {email} = this.props;
        return <Link to={`/email/${email.id}`}>
        <article className="email-preview flex j-between">
            <div>
                <h3>{email.sender}</h3>
                <h2>{email.subject}</h2>
                <h1>{email.body}</h1>
            </div>
            <div className="flex display-none">
                <button>Delete</button>
                <button onClick={this.onStarToggle}></button>
                {/* <button>Star</button> */}
            </div>
        </article>
    </Link>
    }
    
}