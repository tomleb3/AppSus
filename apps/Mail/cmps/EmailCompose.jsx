export function EmailCompose({ emails }) {
    return <section>
        <div>New Message</div>
        <input type="text" placeholder="To:" />
        <input type="text" placeholder="Subject:" />
        <input type="textarea" placeholder="Content:" />
        <button onClick={send()}>Send</button>
    </section>

}

