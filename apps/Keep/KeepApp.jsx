import { KeepList } from "./cmps/KeepList.jsx"
import { keepService } from "./services/keepService.js"

export class KeepApp extends React.Component {
    
    state = {

    }

    componentDidMount() {

    }

    render() {
        console.log(keepService.query());
        return (
            <article>
                <KeepList notes={keepService.query()}/>
            </article>
        )
    }
}
