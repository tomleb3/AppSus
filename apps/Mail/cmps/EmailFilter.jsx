export class EmailFilter extends React.Component {

    state = {
        name: '',
        isRead: false,
        isStar: false
    }

    render() {
        return <section className="email-filter">
            <button className="btn-nav" onClick="">Inbox</button>
            <button className="btn-nav">Favorites</button>
            <button className="btn-nav">Sent</button>
            <button className="btn-nav">Something</button>
        </section>;
        {/* <input type="text" name="name"
                value={this.state.filterBy.name}
                placeholder="Filter by name"
                autoComplete="off"
                onChange={this.handleChange} /> */}

    }

}