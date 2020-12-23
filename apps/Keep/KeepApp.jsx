import { KeepList } from "./cmps/KeepList.jsx"
import { keepService } from "./services/keepService.js"
import { storageService } from "./services/storageService.js";

export class KeepApp extends React.Component {

    state = {

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

    componentDidUpdate() {
        storageService.save(keepService.query())
    }

    componentDidMount() {

    }

    render() {
        return (
            <article>
                <KeepList notes={keepService.query()} onRemove={this.onRemoveNote} />
                <button onClick={this.onClearAll}>Clear All</button>
                <button className="btn-plus" onClick={this.onAddNote}></button>
            </article>
        )
    }
}
