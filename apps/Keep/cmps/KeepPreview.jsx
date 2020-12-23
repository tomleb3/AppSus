import { utilService } from "../../../services/utilService.js"

const { Link } = ReactRouterDOM;

export class KeepPreview extends React.Component {

    state = {

    }


    dynamicNote = () => {
        switch (this.props.note.type) {
            case 'NoteTxt':
                return <p>{this.props.note.info.txt}</p>
            case 'NoteImg':
                return <img src={this.props.note.info.url}></img>
            case 'NoteTodos':
                return this.props.note.info.todos.map(todo => {
                    return <h2 key={utilService.makeId()}>{todo.txt}</h2>
                })
            case 'NoteVideo':
                return <LinearScale info={info} onAns={onAns} />
        }
        return <p>UNKNWON</p>
    }


    componentDidMount() {
        // console.log('this.props');
        console.log(this.props.note);
    }


    render() {
        return (
            <article style={{ backgroundColor: this.props.note.style.bgc }} className="keep-preview">
                <h1>{this.props.note.info.title}</h1>
                {this.dynamicNote()}
                {/* <h3>{this.props.note.body}</h3> */}
            </article>
        )
        {/* <Link to={`/email/${email.id}`}></Link> */ }
    }

}

