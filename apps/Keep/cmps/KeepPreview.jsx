import { utilService } from "../../../services/utilService.js"
const { Link } = ReactRouterDOM;

export class KeepPreview extends React.Component {
    refUpload = React.createRef()

    dynamicNote = () => {
        switch (this.props.note.type) {
            case 'NoteTxt':
                return <div><textarea className="transparent-input" placeholder="What's on your mind...">{this.props.note.info.txt}</textarea></div>
            case 'NoteImg':
                if (this.props.note.info.url)
                    return <div><img src={this.props.note.info.url}></img></div>
                else {
                    return <div className="upload-container flex j-center">
                        <label htmlFor="img-input" data-trans="upload" onClick={this.onImgInput}>Upload
                        <input id="img-input" type="file" ref={this.refUpload} onChange={this.onImgInput}></input>
                        </label>
                    </div>
                }
            case 'NoteTodos':
                this.sortTodosByChecked()
                return this.props.note.info.todos.map(todo => {
                    return <aside className="todo-container" key={utilService.makeId()}>
                        <input type="checkbox" onClick={() => this.onCheckBoxClick(todo)} checked={todo.isChecked} key={utilService.makeId()}></input>
                        <h4 key={utilService.makeId()}>{todo.txt}</h4>
                    </aside>
                })
            case 'NoteVideo':
                return <div>video</div>
        }
        return <div className="flex col">
            <button key={utilService.makeId()} onClick={() => this.onSetType('NoteTxt')}>Text</button>
            <button key={utilService.makeId()} onClick={() => this.onSetType('NoteImg')}>Image</button>
            <button key={utilService.makeId()} onClick={() => this.onSetType('NoteTodos')}>ToDo</button>
            <button key={utilService.makeId()} onClick={() => this.onSetType('NoteVideo')}>Video</button>
        </div>
    }

    onImgInput = (ev) => {
        this.loadImageFromInput(ev, this.setState({}))

        // if (this.refUpload.current) { // highly experimental
        //     console.log('yay')
        //     return <div>asd</div>
        // }
    }

    loadImageFromInput = (ev, onImageReady) => {
        var reader = new FileReader()
        reader.onload = function (event) {
            var img = new Image()
            img.onload = onImageReady.bind(null, img)
            img.src = event.target.result

            onImgClick(img.src)
        }
        reader.readAsDataURL(ev.target.files[0])
    }

    onCheckBoxClick = (todo) => {
        todo.isChecked = !todo.isChecked
        this.setState({})
    }

    sortTodosByChecked = () => {
        this.props.note.info.todos.sort(function (a, b) { return a.isChecked - b.isChecked })
    }

    onSetType = (type) => {
        this.props.note.type = type
        this.setState({})
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <article style={{ backgroundColor: this.props.note.style.bgc }} className="keep-preview">
                <input className="transparent-input" type="text" placeholder="Title.."></input>
                {this.dynamicNote()}
                <section className="btn-container flex j-around">
                    <button>Add</button>
                    <button>asd</button>
                    <button onClick={() => this.props.onRemove(note.id)}>Remove</button>
                </section>
            </article>
        )
        {/* <Link to={`/email/${email.id}`}></Link> */ }
    }
}