// import { mailService } from "../services/mailService.js"

const { Link } = ReactRouterDOM;

export function EmailPreview({ email }) {


    return <Link to={`/email/${email.id}`}>
        <article className="email-preview">
            <h1>{email.subject}</h1>
            <h3>{email.body}</h3>
        </article>

    </Link>




}