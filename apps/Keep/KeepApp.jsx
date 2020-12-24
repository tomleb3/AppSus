import { KeepList } from "./cmps/KeepList.jsx"
import { keepService } from "./services/keepService.js"

export class KeepApp extends React.Component {

    state = {
        notes: []
    }

    loadNotes = () => {
        keepService.query().then(notes => {
            this.setState({ notes })
        })
    }

    onAddNote = () => {
        keepService.addNote()
        this.setState({})
    }

    onRemoveNote = (noteId) => {
        keepService.removeNote(noteId).then(() => {
            this.setState({})
        })
    }

    onClearAll = () => {
        storageService.clear()
        location.reload()
    }

    componentDidMount() {
        this.loadNotes()
    }

    componentDidUpdate(){
// keepService.sa
    }

    render() {
        return (
            <article>
                <KeepList notes={this.state.notes} onRemove={this.onRemoveNote} />
                <button onClick={this.onClearAll}>Clear All</button>
                <button className="btn-plus" onClick={this.onAddNote}></button>
            </article>
        )
    }
}
