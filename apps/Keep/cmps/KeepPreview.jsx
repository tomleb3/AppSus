import { utilService } from "../../../services/utilService.js"
const { Link } = ReactRouterDOM;

export class KeepPreview extends React.Component {
    dynamicNote = () => {
        switch (this.props.note.type) {
            case 'NoteTxt':
                return <div><textarea className="transparent-input" placeholder="What's on your mind..."
                    name="txt" onChange={this.handleInputChange}>{this.props.note.info.txt}</textarea></div>
            case 'NoteImg':
                if (this.props.note.info.url)
                    return <div><img src={this.props.note.info.url}></img></div>
                else {
                    return <div className="flex j-center">
                        <input className="transparent-input" type="text" placeholder="URL?" onChange={this.handleInputChange}></input>
                    </div>
                }
            case 'NoteTodos':
                this.sortTodosByChecked()
                return this.props.note.info.todos.map(todo => {
                    return <aside className="todo-container" key={utilService.makeId()}>
                        <input type="checkbox" onClick={() => this.onTodoToggle(todo)} onChange={this.handleInputChange} checked={todo.isChecked} key={utilService.makeId()}></input>
                        <h4 key={utilService.makeId()}>{todo.txt}</h4>
                    </aside>
                })
            case 'NoteVideo':
                return <div>video</div>
        }
        return <div className="add-container">
            <section className="flex j-around a-center col">
                <button key={utilService.makeId()} onClick={() => this.onSetType('NoteTxt')}></button>
                <button key={utilService.makeId()} onClick={() => this.onSetType('NoteImg')}></button>
            </section>
            <aside className="flex j-around a-center col">
                <button key={utilService.makeId()} onClick={() => this.onSetType('NoteTodos')}></button>
                <button key={utilService.makeId()} onClick={() => this.onSetType('NoteVideo')}></button>
            </aside>
        </div>
    }

    onTodoToggle = (todo) => {
        todo.isChecked = !todo.isChecked
        this.setState({})
    }

    sortTodosByChecked = () => {
        this.props.note.info.todos.sort(function (a, b) { return a.isChecked - b.isChecked })
    }

    onPinnedToggle = () => {
        this.props.note.isPinned = !this.props.note.isPinned
        this.props.saveNotes()
        this.setState({})
    }

    onSetType = (type) => {
        this.props.note.type = type
        this.setState({})
    }

    onColorChange = (ev) => {
        console.log(ev.target.value)
        this.props.note.style.bgc = ev.target.value
        this.props.saveNotes()
        this.setState({})
    }

    handleInputChange = (ev) => {
        this.props.note.info[ev.target.name] = ev.target.value
        this.props.saveNotes()
        this.setState({})
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const note = this.props.note

        return (
            <article style={{ backgroundColor: note.style.bgc }} className="keep-preview">
                <button className={note.isPinned ? "top-pin" : "display-none"} onClick={this.onPinnedToggle}></button>
                <input className="transparent-input" name="title" type="text" placeholder="Title.."
                    value={note.info.title} onChange={this.handleInputChange}></input>

                {this.dynamicNote()}

                <section className="btn-actions flex j-around">
                    <button className={note.isPinned ? "pinned" : "not-pinned"} onClick={this.onPinnedToggle}></button>
                    <label>
                        <input type="color" value={note.style.bgc} onChange={this.onColorChange}></input>
                    </label>
                    <button onClick={() => this.props.onRemove(note.id)}></button>
                </section>

                <p className="muted">Created at {new Date(note.createdAt).toLocaleTimeString("en-US")}
                    &nbsp;{new Date(note.createdAt).toLocaleDateString("en-US")}</p>
            </article>
        )
        {/* <Link to={`/email/${email.id}`}></Link> */ }
    }
}