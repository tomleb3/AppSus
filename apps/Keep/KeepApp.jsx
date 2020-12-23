import { KeepList } from "./cmps/KeepList.jsx"
import { keepService } from "./services/keepService.js"
// import { storageService } from "../../services/storageService.js";

export class KeepApp extends React.Component {

    state = {

    }

    componentDidMount() {

    }

    loadNotes = () =>{
        // const storageNotes = storageNotes.load(
        // if (!servNotes.length)

        // const servNotes = keepService.query()
    }

    render() {
        return (
            <article>
                <KeepList notes={keepService.query()}/>
                <button className="btn-plus" onClick={console.log('hi')}></button>
            </article>
        )
    }
}
