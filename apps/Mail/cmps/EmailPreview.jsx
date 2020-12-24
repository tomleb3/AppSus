// import { mailService } from "../services/mailService.js"

const { Link } = ReactRouterDOM;

export function EmailPreview({ email }) {
    
    return <Link to={`/email/${email.id}`}>
        <article className="email-preview flex j-between">
            <div>
                <h3>{email.sender}</h3>
                <h2>{email.subject}</h2>
                <h1>{email.body}</h1>
            </div>
            <div className="flex">
                <button>Delete</button>
                <button>Star</button>
            </div>
        </article>
    </Link>
}