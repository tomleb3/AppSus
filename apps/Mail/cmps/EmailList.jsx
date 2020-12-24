import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({ emails, onSave, onRemove }) {
    return <section className="emails-list">
        {emails.map(email => {
            return <EmailPreview key={email.id} email={email} onRemove={onRemove} onSave={onSave} />
        })}
    </section>

}