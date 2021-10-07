import React, { Component } from "react";

export function collapseFeature(ComponentToCollapse) {

    return class Collapse extends Component {
        constructor(props) {
            super(props);
            this.state = { expand: false, name: props.name, childs: props.childs };
        }
        expand(e) {
            e.preventDefault();
            this.setState({ expand: !this.state.expand });
        }
        collapse(e) {
            e.preventDefault();
            this.setState({ expand: !this.state.expand });
        }
        showCode(e, name) {
            e.preventDefault();
            this.props.showCode(name);
        }
        render() {
            return (
                <>
                    {this.state.expand === false ?
                        <a href="/algoes" onClick={(e) => this.expand(e)}>
                            <i className="fa fa-plus m-2" aria-hidden="true"></i>
                        </a>
                        :
                        <a href="/algoes" onClick={(e) => this.expand(e)}>
                            <i className="fa fa-minus m-2" aria-hidden="true"></i>
                        </a>
                    }
                    <ComponentToCollapse {...this.props} />
                    <ul>
                        {this.state.expand === true && this.state.childs.map((child, index) => {
                            return (
                                <>
                                    <li key={index}><a key={index} href="/algoes" onClick={(e) => this.showCode(e, child.name)}>{child.name}</a></li>
                                </>
                            )
                        })}
                    </ul>
                </>
            )
        }
    }
}
export default collapseFeature;