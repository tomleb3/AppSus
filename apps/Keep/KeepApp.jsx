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

    saveNotes = () => {
        keepService.saveNotesToStorage()
    }

    onAddNote = () => {
        keepService.addNote().then(() => {
            this.loadNotes()
        })
    }

    onRemoveNote = (noteId) => {
        keepService.removeNote(noteId).then(() => {
            this.loadNotes()
        })
    }

    onClearAll = () => {
        keepService.clearKeepStorage()
        location.reload()
    }

    componentDidMount() {
        this.loadNotes()
    }

    render() {
        return (
            <article>
                <KeepList notes={this.state.notes} saveNotes={this.saveNotes} onRemove={this.onRemoveNote} />
                <button onClick={this.onClearAll}>Clear All</button>
                <button className="btn-plus" onClick={this.onAddNote}></button>
            </article>
        )
    }
}
