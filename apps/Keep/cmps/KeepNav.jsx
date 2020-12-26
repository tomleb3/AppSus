export class KeepNav extends React.Component {
    refBtn1 = React.createRef()
    refBtn2 = React.createRef()
    refBtn3 = React.createRef()
    refBtn4 = React.createRef()
    refBtn5 = React.createRef()

    toggleClass = (ev) => {
        const btnRefs = [this.refBtn1.current, this.refBtn2.current, this.refBtn3.current, this.refBtn4.current, this.refBtn5.current]
        btnRefs.forEach(btn => { btn.className = '' })
        ev.target.className = 'active'
    }

    render() {
        return <nav className="keep-nav flex col">
            <ul className="clean-list">Show
                    <li className="active" ref={this.refBtn1} onClick={(ev) => {
                    this.props.onSetFilter('')
                    this.toggleClass(ev)
                }}>All</li>
                <li ref={this.refBtn2} onClick={(ev) => {
                    this.props.onSetFilter('text')
                    this.toggleClass(ev)
                }}>Text</li>
                <li ref={this.refBtn3} onClick={(ev) => {
                    this.props.onSetFilter('image')
                    this.toggleClass(ev)
                }}>Image</li>
                <li ref={this.refBtn4} onClick={(ev) => {
                    this.props.onSetFilter('list')
                    this.toggleClass(ev)
                }}>List</li>
                <li ref={this.refBtn5} onClick={(ev) => {
                    this.props.onSetFilter('video')
                    this.toggleClass(ev)
                }}>Video</li>
            </ul>
            <button onClick={this.props.onReset}>Reset</button>
        </nav >
    }
}