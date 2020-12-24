export function EmailCompose({ emails, onSend }) {
    
    return <section className="email-compose flex col">
        <h3>New Message</h3>
        <input type="text" className="transparent-input" placeholder="To:" />
        <input type="text" className="transparent-input" placeholder="Subject:" />
        <textarea className="transparent-input" placeholder="Content:" />
        <button onClick={onSend}>Send</button>
    </section>
}