const { Link } = ReactRouterDOM;

export function KeepPreview({ note }) {


    return (
        <article style={{backgroundColor: note.style.bgc}} className="keep-preview">
            <h1>{note.info.txt}</h1>
            <h3>{note.body}</h3>
        </article>
    )

    {/* <Link to={`/email/${email.id}`}></Link> */ }




}