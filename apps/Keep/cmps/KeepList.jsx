import { KeepPreview } from "./KeepPreview.jsx"

export function KeepList({ notes }) {
    return <section className="keep-list">
        {notes.map(note => {
            return <KeepPreview key={note.id} note={note} />
        })}
    </section>
}