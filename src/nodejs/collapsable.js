import { Component } from "react";
import collapseFeature from "./collapse";

export class CollapsableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {name:props.name}
    }
    showCode(e,name) {
        e.preventDefault();
        this.props.showCode(name);
    }
    render() {
        return (
            <>
                <a href="/algoes" onClick={(e) => this.showCode(e,this.state.name)}>{this.state.name}</a>
            </>
        )
    }
}
export default collapseFeature(CollapsableComponent);