import { KeepPreview } from "./KeepPreview.jsx"

export function KeepList({ notes, onRemove }) {
    return <section className="keep-list grid">
        {notes.map(note => {
            return <KeepPreview key={note.id} note={note} onRemove={onRemove} />
        })}
    </section>
}