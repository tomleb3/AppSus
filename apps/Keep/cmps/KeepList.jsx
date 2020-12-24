import { KeepPreview } from "./KeepPreview.jsx"

export function KeepList({ notes, saveNotes, onRemove }) {

    notes.sort(function (a, b) { return b.isPinned - a.isPinned })
    
    return <section className="keep-list grid">
        {notes.map(note => {
            return <KeepPreview key={note.id} note={note} saveNotes={saveNotes} onRemove={onRemove} />
        })}
    </section>
}