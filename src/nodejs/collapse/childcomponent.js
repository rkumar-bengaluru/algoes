import { Component } from "react";
import childCollapse from "./child";

export class ChildComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }
    showComponent(e, name) {
        e.preventDefault();
        this.props.showComponent(name);
    }
    render() {
        return (
            <>
                <a href="/algoes"  onClick={(e) => this.showComponent(e, this.state.name)}>{this.state.name}</a>
            </>
        )
    }
}
export default childCollapse(ChildComponent);