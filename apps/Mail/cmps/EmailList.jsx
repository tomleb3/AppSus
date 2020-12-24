import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({ emails, saveEmails}) {
    return <section className="emails-list">
        {emails.map(email => {
            return <EmailPreview key={email.id} email={email} saveEmails={saveEmails}/>
        })}
        </section>

}