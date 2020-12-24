// import { mailService } from "../services/mailService.js"

const { Link } = ReactRouterDOM;

export function EmailPreview({ email }) {


    return <Link to={`/email/${email.id}`}>
        <article className="email-preview flex j-between">
            <div>
                <h1>{email.subject}</h1>
                <h3>{email.body}</h3>
            </div>
            <div className="flex">
                <button>Delete</button>
                <button>Star</button>
            </div>
        </article>

    </Link>




}