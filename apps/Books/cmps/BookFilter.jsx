export class BookFilter extends React.Component {
    state = {
        title: ''
    }

    handleChange = (ev) => {
        this.setState({ title: ev.target.value }, () => {
            this.props.setFilter(this.state)
        })
    }

    render() {
        return <input type="text" name="name"
            value={this.state.title}
            placeholder="Filter by name"
            onChange={this.handleChange} />
    }
}