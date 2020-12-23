import { utilService } from "../../../services/utilService.js"

const { Link } = ReactRouterDOM;

export class KeepPreview extends React.Component {

    state = {

    }


    dynamicNote = () => {
        switch (this.props.note.type) {
            case 'NoteTxt':
                return <div>
                    <textarea className="transparent" placeholder="What's on your mind...">{this.props.note.info.txt}</textarea>
                </div>
            case 'NoteImg':
                return <div>
                    <img src={this.props.note.info.url}></img>
                </div>
            case 'NoteTodos':
                return this.props.note.info.todos.map(todo => {
                    return <aside className="todo-container">
                        <button>X</button>
                        <h2 key={utilService.makeId()}>{todo.txt}</h2>
                    </aside>
                })
            case 'NoteVideo':
                return <LinearScale info={info} onAns={onAns} />
        }
        return <div>
            <button onClick={this.props.note.type='NoteTxt'}>Text</button>
            <button>Image</button>
            <button>ToDo</button>
            <button>Video</button>
        </div>
    }


    componentDidMount() {
        // console.log('this.props');
        console.log(this.props.note);
    }


    render() {
        return (
            <article style={{ backgroundColor: this.props.note.style.bgc }} className="keep-preview">
                {/* <h1>{this.props.note.info.title}</h1> */}
                <input className="transparent" placeholder="Title.."></input>
                {this.dynamicNote()}
                <section className="btn-container">
                    <button>asd</button>
                    <button>asd</button>
                    <button>asd</button>
                </section>
            </article>
        )
        {/* <Link to={`/email/${email.id}`}></Link> */ }
    }
}